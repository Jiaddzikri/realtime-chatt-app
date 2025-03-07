import { FaMessage, FaGear } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdAutorenew } from "react-icons/md";

const Layouts = () => {

  return (
    <div className="relative h-screen bg-[#202022] py-2 box-border overflow-hidden flex">
      <div className="px-8 py-4 w-max h-screen text-white flex flex-col items-center">
        <header className="py-4">
          <a href="/">Logo</a>
        </header>
        <ul className="flex flex-col gap-8 mt-20 text-center h-[70%]">
          <li className="relative">
            <NavLink className={"flex flex-col items-center"}>
              <span className="text-2xl">
                <FaMessage />
              </span>
              <span className="text-[0.65rem] mt-3">All Chats</span>
              <span class="absolute -top-2 right-0 bg-[#ff7a55] text-white text-xs font-bold rounded-full px-2 py-0.5 shadow animate-pulse">
                5
              </span>
            </NavLink>
          </li>
          <li className="relative">
            <NavLink className={"flex flex-col items-center"}>
              <span className="text-2xl">
              <MdAutorenew />
              </span>
              <span className="text-[0.65rem] mt-3">Status</span>
              <span class="absolute -top-2 right-0 bg-[#ff7a55] text-white text-xs font-bold rounded-full px-2 py-2 shadow animate-pulse">
    
              </span>
            </NavLink>
          </li>
          <li className="relative top-[60%]">
            <NavLink className={"flex flex-col items-center"}>
              <span className="text-2xl">
                <FaGear />
              </span>
              <span className="text-[0.65rem] mt-3">Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <main className="w-screen bg-[#f9fafc] rounded-[2rem] overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};
export default Layouts;
