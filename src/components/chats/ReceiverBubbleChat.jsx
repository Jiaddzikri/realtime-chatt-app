const ReceiverBubbleChat = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="self-end">
        <img
          className="w-14 h-[3.5rem] object-cover bg-cover bg-center rounded-md"
          src="/images/person.jpeg"
          alt="user-profile-picture"
        />
      </div>
      <div className="relative min-w-[4rem] max-w-[25rem] min-h-[2rem] py-3 px-4 bg-slate-200 rounded-xl before:absolute before:w-[2rem] before:h-[1.5rem] before:-left-4 before:bottom-0 before:bg-slate-200 after:absolute after:w-[1rem] after:h-[1.5rem] after:bottom-0 after:-left-4 after:bg-white after:rounded-br-full">
        <p className="text-[#46479f] text-[.75rem] font-[500]">Nelson Piquet</p>
        <p className="text-[.75rem] font-[500] mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odit?
        </p>
        <p className="text-[.7rem] font-[400] text-slate-500 text-end">17.00</p>

      </div>
    </div>
  );
};
export default ReceiverBubbleChat;
