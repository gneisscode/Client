import React, { useEffect, useContext, useState } from "react";
import DashHeader from "../../components/Dashboard/DashHeader";
import Sidebar from "../../components/Dashboard/Sidebar";
import { Context } from "../../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";

const Messages = () => {
  const { user, chats, setChats } = useContext(Context);
  const [resfresh, setRefresh] = useState(false);

  const fetchChats = async () => {
    setRefresh(true)
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      };

      const response = await axios.get(`/chat`, config);
      // console.log(response.data);
      setChats(response.data);
      setRefresh(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const handleChatClick = (chatId) => {
     const storedChats = JSON.parse(localStorage.getItem("chats"));
    const currentTime = new Date().getTime();

    const updatedChats = storedChats.map((chat) => {
      if (chat._id === chatId) {
        return {
          ...chat,
          checked: currentTime,
        };
      }
      return {
        ...chat,
      };
    });

    localStorage.setItem("chats", JSON.stringify(updatedChats));
  };

  const isNewMessage = (chat) => {
    const storedChats = JSON.parse(localStorage.getItem("chats"));

    if (storedChats) {
      const storedChat = storedChats.find(
        (storedChat) => storedChat._id === chat._id
      );

      if (storedChat && chat.latestMessage?.sender?._id !== user.adminId) {
        return (
          storedChat.checked < new Date(chat.latestMessage?.createdAt).getTime()
          
        );
      }
    }

    return false;
  };

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem("chats"));
    if (storedChats && !chats.length) {
      setChats(storedChats);
    } else if (!storedChats) {
      localStorage.setItem("chats", JSON.stringify(chats));
    }
  }, [chats]);
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative ">
        <Sidebar />
        <div className="py-[40px] px-[52px] absolute top-[112px] left-[300px] w-[1024px]">
          <div className="flex gap-4 mb-6">
            <div className="text-[20px] font-[400] text-[#808080]">
              Messages
            </div>

            <i className="fa-solid fa-chevron-right mt-2"></i>
            <div className="text-[20px] font-[500] text-[#0267FF]">
              All messages
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-[24px] font-[600] text-[#0267FF]">
              Messages
            </div>
            <i
              className={`fa-solid fa-rotate cursor-pointer ${
                resfresh ? "animate-spin" : ""
              }`}
              onClick={() => {
                fetchChats();
              }}
            ></i>
          </div>

          <div className="flex flex-col mt-12">
            {chats && chats.length > 0 ? (
              <div>
                {" "}
                {chats.map((chat) => {
                  let recipient = "";
                  let self = "";
                  chat.admins.map((admin) => {
                    if (admin._id !== user.adminId) {
                      recipient = admin.firstName + " " + admin.lastName;
                    } else {
                      self = admin.firstName + " " + admin.lastName;
                    }
                  });
                  return (
                    <Link
                      to={`/chat/${chat._id}?recipient=${encodeURIComponent(
                        recipient ? recipient : self
                      )}`}
                      onClick={() => handleChatClick(chat._id)}
                    >
                      <div className="flex flex-col border-t border-[#e5ebf1]  w-[100%]">
                        <div className="flex flex-col justify-center bg-transparent  p-4 hover:bg-[#fafcff] rounded border-b border-[#e5ebf1]">
                          <div className="text-[16px] font-[500] text-[#2E3847]">
                            {recipient ? recipient : self}
                          </div>
                          <div
                            className={` text-[#5F6D7E] flex justify-between text-[14px] ${
                              isNewMessage(chat) ? "font-[700]" : "font-[500] "
                            }`}
                          >
                            <p className=" max-w-[80%] truncate">
                              {chat.latestMessage?.content}
                            </p>
                            {isNewMessage(chat) && (
                              <div>
                                <i className="fa-solid fa-circle text-blue-500 "></i>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="flex justify-center items-center text-[16px] mt-14 ">
                No messages to display, click
                <Link to="/admin" className="text-blue-500">
                  &nbsp;here&nbsp;
                </Link>
                to send a message to an admin
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
