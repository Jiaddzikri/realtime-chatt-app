import { GoPaperclip } from "react-icons/go";
import { BsMic } from "react-icons/bs";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { IoDocument } from "react-icons/io5";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useState } from "react";


const ChatInput = () => {
    const [isAttachmentOpen, setAttachmentOpen] = useState(false);
    return (
        <div className="w-full h-[4rem] rounded-t-2xl">
            <div className="relative flex gap-5 items-center justify-center w-[80%] h-full bg-slate-200 rounded-xl mx-auto px-4">
              <button
                onClick={() => setAttachmentOpen((prev) => !prev)}
                className="text-2xl"
              >
                <GoPaperclip />
              </button>
              <textarea
                rows={1}
                placeholder="Your Message"
                className="w-[80%] bg-slate-200 text-slate-500 border-none outline-none focus:outline-none"
              ></textarea>
              <button className="text-2xl">
                <BsMic />
              </button>
              <button className="text-2xl">
                <PiPaperPlaneTiltLight />
              </button>

              <div
                className={`absolute z-10 w-[12rem] max-h bg-slate-50 rounded-xl border-[1px] border-slate-300 bottom-[120%] left-0 p-4 ${
                  isAttachmentOpen ? "block" : "hidden"
                } transition-all duration-300`}
              >
                <ul>
                  <li>
                    <button className="w-full flex items-center gap-2 mb-2 hover:bg-slate-200 p-1 rounded-md text-slate-600">
                      <span className="text-xl text-[#7678ed]">
                        <IoDocument />
                      </span>{" "}
                      Documents
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center gap-2 mb-2 text-slate-600 hover:bg-slate-200 rounded-md p-1">
                      <span className="text-xl text-[#38ef7d]">
                        <MdOutlineAddPhotoAlternate />
                      </span>{" "}
                      Foto & Video
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    )
}
export default ChatInput;