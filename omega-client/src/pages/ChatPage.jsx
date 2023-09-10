import React from "react";
import Chat from "../features/Messages/Chat";
import { SocketProvider } from "../context/SocketProvider";

const ChatPage = () => {
  return (
    <SocketProvider>
      <Chat />
    </SocketProvider>
  );
};
export default ChatPage;
