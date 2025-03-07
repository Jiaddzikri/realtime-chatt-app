import { useRef, useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { PiDotsThreeVertical } from "react-icons/pi";
import { io } from "socket.io-client";

const ChatHeader = () => {
  const [isMessageSearchBarActive, setMessageSearchBar] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div>
        <h1 className="text-2xl font-[500]">Nelson Piquet</h1>
        <p className="text-[0.85rem] text-slate-500">online</p>
      </div>
      <div className="flex gap-5 text-slate-500">
        <span className="text-4xl">
          <button
            id="search-message-trigger"
            onClick={() => setMessageSearchBar((prev) => !prev)}
            type="button"
          >
            <CiSearch />
          </button>
        </span>
        <span className="text-4xl">
          <PiPhoneThin />
        </span>
        <span className="text-4xl">
          <PiDotsThreeVertical />
        </span>
      </div>

      <div
        id="search-modal-message"
        onClick={(e) => {
          if (e.target.id === "search-modal-message")
            setMessageSearchBar(false);
        }}
        className={`fixed w-screen h-screen ${
          isMessageSearchBarActive ? "translate-y-0" : "translate-y-[-100%]"
        } left-0 top-0 z-50 transition-all duration-300 ease-in-out cursor-pointer`}
      >
        <div className="flex justify-center items-center relative px-5 w-[35%] h-[3.5rem] bg-white border-[1px] border-slate-300 top-6 shadow-md mx-auto rounded-md">
          <span className="text-2xl">
            <CiSearch />
          </span>
          <input
            className="w-full h-full outline-none px-3"
            placeholder="search message here..."
            type="text"
          />
        </div>
      </div>
    </header>
  );
};
export default ChatHeader;
