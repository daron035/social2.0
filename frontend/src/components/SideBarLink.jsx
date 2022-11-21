function SideBarLink({ Icon, text, active }) {
  return (
    <div
      className={`flex text-[#D7D9DB] justify-center items-center xl:justify-start space-x-3 text-xl hover:bg-[#d9d9d9] 
         hover:bg-opacity-25 rounded-full cursor-pointer transition duration-200 xl:w-auto xl:h-auto xl:py-2 xl:px-2
         ${active && "font-bold"}`}
      onClick={() => (active = true)}
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}

export default SideBarLink;
