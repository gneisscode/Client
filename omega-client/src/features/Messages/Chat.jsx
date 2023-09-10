import React, { useEffect, useContext, useState, useCallback } from "react";
import DashHeader from "../../components/Dashboard/DashHeader";
import Sidebar from "../../components/Dashboard/Sidebar";
import { Context } from "../../context/Context";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { nanoid } from "nanoid";

import TextField from "../../components/TextField";

import { useSocket } from "../../context/SocketProvider";

const Chat = () => {
  const { user, notifications, setNotifications } = useContext(Context);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedChat, setSelectedChat] = useState(id);
  const searchParams = new URLSearchParams(location.search);
  const recipient = searchParams.get("recipient");
  const decodedRecipient = decodeURIComponent(recipient);
  const socket = useSocket();
  const storedChats = JSON.parse(localStorage.getItem("chats"));
  const [fetching, setFetching] = useState(false);
  const handleContentChange = (e) => {
    const content = e.target.value;
    setContent(content);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      setFetching(true);
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        };

        const response = await axios.get(`/message/${id}`, config);
        // console.log(response.data);
        const messages = response.data;
        setMessages(messages);
        setFetching(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();

    socket.on("connect", () => {
      // console.log(`connected to the server with socket.id:${socket.id}`);
    });

    socket.emit("setup", { _id: user.adminId }, (response) => {
      // console.log(`user joined personal room ${user.adminId}`);
    });

    socket.emit("join chat", id, (response) => {
      // console.log(`user joined chat ${id} `);
    });
  }, [socket]);

  const handleNewMessage = useCallback(
    async (newMessageReceived) => {
      if (!selectedChat || selectedChat !== newMessageReceived.chat._id) {
        if (!notifications.includes(newMessageReceived)) {
          setNotifications([newMessageReceived, ...notifications]);
          console.log("you have a new notification");
          console.log(notifications);
        }
      } else {
        setMessages((prevMessages) => [...prevMessages, newMessageReceived]);
        const updatedChats = storedChats.map((chat) => {
          const currentTime = new Date().getTime();
          if (chat._id === id) {
            return {
              ...chat,
              checked: currentTime,
            };
          }
          return chat;
        });

        localStorage.setItem("chats", JSON.stringify(updatedChats));
        console.log(newMessageReceived);
        console.log("New message!");
      }
    },
    [socket, selectedChat, storedChats, id]
  );

  useEffect(() => {
    socket.on("message received", handleNewMessage);
    return () => {
      socket.off("message received", handleNewMessage);
    };
  }, [id, socket]);

  const handleSendMessage = async () => {
    const temporaryId = nanoid();
    if (content) {
      const tempMessage = {
        content: content,
        sender: { _id: user.adminId },
        temporaryId: temporaryId,
        createdAt: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        _id: 8000,
      };
      setContent("");
      setMessages((prevMessages) => [...prevMessages, tempMessage]);
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        };

        const formData = {
          content: content,
          chatId: id,
          temporaryId: temporaryId,
        };

        const response = await axios.post(`/message`, formData, config);

        console.log(response.data);
        const newMessage = response.data;
        // setMessages((prevMessages) => [...prevMessages, newMessage]);

        setMessages((prevMessages) => {
          const updatedMessages = prevMessages.map((message) => {
            if (message.temporaryId === temporaryId) {
              // Match the temporary message using the temporary message ID
              return newMessage;
            }
            return message;
          });
          return updatedMessages;
        });

        const newMessageRecieved = {
          sender: {
            _id: response.data.sender._id,
            firstName: response.data.sender.firstName,
            lastName: response.data.sender.lastName,
            email: response.data.sender.email,
          },
          content: response.data.content,
          chat: {
            _id: response.data.chat._id,
            chatName: response.data.chat.chatName,
            admins: [
              {
                _id: response.data.chat.admins[0]._id,
                firstName: response.data.chat.admins[0].firstName,
                lastName: response.data.chat.admins[0].lastName,
                email: response.data.chat.admins[0].email,
              },
              {
                _id: response.data.chat.admins[1]._id,
                firstName: response.data.chat.admins[1].firstName,
                lastName: response.data.chat.admins[1].lastName,
                email: response.data.chat.admins[1].email,
              },
            ],
            createdAt: response.data.chat.createdAt,
            updatedAt: response.data.chat.updatedAt,
            __v: response.data.chat.__v,
            latestMessage: response.data.chat.latestMessage,
          },
          _id: response.data._id,
          createdAt: response.data.createdAt,
          updatedAt: response.data.updatedAt,
          __v: response.data.__v,
        };

        socket.emit("new message", newMessageRecieved, (response) => {
          console.log("Message object sent");
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative ">
        <Sidebar />
        <div className="flex flex-col justify-between pt-[40px] px-[52px] absolute top-[112px] left-[300px] w-[1024px] h-screen">
          <div className="flex gap-4 mb-6">
            <div className="text-[20px] font-[400] text-[#808080]">
              Messages
            </div>
            <i className="fa-solid fa-chevron-right mt-2"></i>
            <Link to="/messages">
              <div className="text-[20px] font-[400] text-[#808080]">
                All messages
              </div>
            </Link>
            <i className="fa-solid fa-chevron-right mt-2"></i>
            <div className="text-[20px] font-[500] text-[#0267FF]">
              {decodedRecipient}
            </div>

            {fetching && (
              <div className="flex justify-center items-center text-[20px]">
                <i
                  className="fa-solid fa-rotate cursor-pointer
              animate-spin "
                ></i>
              </div>
            )}
          </div>

          <div className="justify-self-end">
            {/* <div className=" flex text-[24px] font-[600] text-gray-700 ">
                <div>{decodedRecipient}</div>
              </div> */}
            <div className="flex flex-col gap-1 w-[100%] mt-[100px] justify-end">
              {messages.map((message) => {
                return (
                  <div
                    key={message._id}
                    className={`flex ${
                      message.sender._id === user.adminId
                        ? "justify-end"
                        : "justify-start"
                    } `}
                  >
                    <div
                      className={`flex flex-col  ${
                        message.sender._id === user.adminId
                          ? "bg-blue-500  text-white"
                          : "bg-[#f7f8fa] text-black"
                      } rounded-md px-2 py-1 max-w-[47%] break-words `}
                    >
                      <div>{message.content}</div>
                      {message._id !== 8000 ? (
                        <small className="text-[10px] self-end">
                          {new Date(message?.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          })}{" "}
                          {message.sender._id === user.adminId && (
                            <i className="fa-solid fa-check-double"></i>
                          )}
                        </small>
                      ) : (
                        <small className="text-[10px] self-end">
                          {message.sender._id === user.adminId && (
                            <i class="fa-solid fa-check"></i>
                          )}
                        </small>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="flex mt-4 border border-[#D1D9E2] h-12 items-center rounded  w-[920px] bg-[#fafcff] ">
                <TextField
                  placeholder="Type a message:"
                  name="content"
                  value={content}
                  onChange={handleContentChange}
                  type="text"
                  className="border-none"
                />

                <i
                  className="fa-regular fa-paper-plane text-[24px] mr-6 text-blue-500 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                  onClick={handleSendMessage}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
