const SenderBubbleChat = () => {
  return (
    <div className="flex gap-5 self-end ">
      <div className="self-end order-2">
        <img
          className="w-14 h-[3.5rem] object-cover bg-cover bg-center rounded-md"
          src="/images/person.jpeg"
          alt="user-profile-picture"
        />
      </div>
      <div className="relative min-w-[4rem] max-w-[25rem] min-h-[2rem] py-3 px-4 bg-[#7678ed] text-white rounded-xl order-1 before:absolute before:w-[2rem] before:h-[1.5rem] before:-right-4 before:bottom-0 before:bg-[#7678ed] after:absolute after:w-[1rem] after:h-[1.5rem] after:bottom-0 after:-right-4 after:bg-white after:rounded-bl-full">
        <p className="text-[.75rem] mt-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor eum rerum nisi, molestiae reprehenderit voluptate, iure, libero deleniti nulla id non cumque. Placeat repellendus labore accusamus ab. Laudantium necessitatibus minus deleniti exercitationem alias iusto provident ipsa eos ab labore odio, similique, sapiente voluptatem sint facere esse? Magni doloremque tempora voluptatem.
        </p>
        <p className="text-[.7rem] font-[400] text-end">17.00</p>
      </div>
    </div>
  );
};
export default SenderBubbleChat;
