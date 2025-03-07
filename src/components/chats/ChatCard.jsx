import { RiPushpinFill } from "react-icons/ri";

const ChatCard = () => {
  return (
    <div className="max-w-72 flex gap-2 h-[4.55rem] hover:bg-slate-200 transition-all cursor-pointer rounded-xl pr-3">
      <div className="flex items-center justify-center">
        <img
          className="w-24 h-[4rem] object-cover bg-cover bg-center rounded-md"
          src="/images/person.jpeg"
          alt="user-profile-picture"
        />
      </div>
      <div className="flex flex-col justify-between py-3 max-w-48 overflow-hidden text-[#202022]">
        <p className="font-[500]">Nelson Piquet</p>
        <p className="text-[0.75rem] line-clamp-1 text-slate-500">
          Hey man whatsapp? pinjam dulu seratus
        </p>
      </div>
      <div className="flex flex-col items-end justify-center gap-2 w-14 h-full">
        <div>
          <span className="text-[0.80rem] text-[#202022]">4m</span>
        </div>
        <div className="relative flex items-center gap-1">
          <span class="bg-[#ff7a55] font-[400] text-white text-xs rounded-full px-2 py-0.5 shadow animate-pulse">
            5
          </span>
          <span className="text-xl text-[#7678ed]">
            <RiPushpinFill />
          </span>
        </div>
      </div>
    </div>
  );
};
export default ChatCard;
