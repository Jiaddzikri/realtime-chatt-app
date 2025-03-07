import { FaMagnifyingGlass } from "react-icons/fa6";
import ChatCard from "../components/chats/ChatCard";
import SenderBubbleChat from "../components/chats/SenderBubbleChat";
import ReceiverBubbleChat from "../components/chats/ReceiverBubbleChat";
import { useEffect, useRef} from "react";
import ChatHeader from "../components/chats/chatHeader";
import ChatInput from "../components/chats/ChatInput";
import { io } from "socket.io-client";

const socket = io("http://localhost:3002", {
  port: 3002,
  path: "/socket-io",
});

const Chats = () => {
  const chatContainer = useRef(null);
  

  useEffect(() => {
    socket.emit("connection")
  }, [])

  useEffect(() => {
    chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
  }, []);
  return (
    <>
      <div className="flex h-full">
        <div className="py-6 px-4">
          <header className="relative">
            <input
              className="w-72 h-[2.5rem] pl-9 rounded-xl bg-[#7678ed4e] placeholder:text-[#202022] text-[#202022] outline-none"
              type="text"
              placeholder="search"
            />
            <span className="absolute left-3 top-3">
              <FaMagnifyingGlass />
            </span>
          </header>
          <div className="flex flex-col mt-5">
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </div>
        </div>
        <div className="w-full h-full relative overflow-hidden">
          <ChatHeader />
          <main
            ref={chatContainer}
            className="h-[78%]  flex flex-col gap-5 px-8 overflow-auto py-8"
          >
            <SenderBubbleChat />
            <ReceiverBubbleChat />
            <SenderBubbleChat />
            <SenderBubbleChat />
            <ReceiverBubbleChat />
            <ReceiverBubbleChat />
          </main>
          <ChatInput />
        </div>
      </div>
    </>
  );
};
export default Chats;
