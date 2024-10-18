import { useState, ReactNode } from "react";

function DropDown({
  title,
  classes,
  children,
}: {
  title: string;
  classes: string;
  children: ReactNode;
}) {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = () => setDropDown(!dropDown);

  return (
    <div className="md:mb-[20px]">
      <div
        className={`flex items-center justify-between cursor-pointer`}
        onClick={toggleDropDown}
      >
        <p className="font-bold">{title}</p>
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <div
        className={`${
          dropDown
            ? `block ${classes || "h-[125px]"} opacity-100`
            : "h-0 opacity-0"
        } transition-all duration-300 bg-white text-[#213547] overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
}

export default DropDown;
