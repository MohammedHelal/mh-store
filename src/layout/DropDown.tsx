import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

export default function DropDown({
  openModal,
  cartLength,
}: {
  openModal: () => void;
  cartLength: number;
}) {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = (bool: boolean) => setDropDown(bool);

  return (
    <>
      <div
        className="cursor-pointer md:hidden py-[25px] px-[15px]"
        onClick={() => toggleDropDown(!dropDown)}
      >
        {dropDown ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
            <path
              fill="white"
              fillRule="evenodd"
              d="M14.718.075l.707.707L8.707 7.5l6.718 6.718-.707.707L8 8.207l-6.718 6.718-.707-.707L7.293 7.5.575.782l.707-.707L8 6.793 14.718.075z"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="6">
            <g fill="white" fillRule="evenodd">
              <path d="M0 0h20v1H0zM0 5h20v1H0z" />
            </g>
          </svg>
        )}
      </div>
      <div
        className={`${
          dropDown ? "h-full" : "h-0"
        } transition-all duration-300 overflow-hidden z-50 absolute top-[96px] bottom-0 right-0 left-0 bg-[#00000099] md:hidden`}
      >
        <div
          className={`${
            dropDown
              ? `block h-[250px] py-[10px] px-[25px] opacity-100`
              : "h-0 opacity-0 py-0 px-[25px]"
          } w-full bg-[#213547] transition-all duration-300 overflow-hidden`}
        >
          <ul className={`list-none py-[10px] border-b-2 border-slate-300`}>
            <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500">
              <Link
                to="/"
                className="stroke"
                onClick={() => toggleDropDown(false)}
              >
                <h4 className="my-0">home</h4>
              </Link>
            </li>
            <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500">
              <Link
                to="/products"
                className="stroke"
                onClick={() => toggleDropDown(false)}
              >
                <h4 className="my-0">products</h4>
              </Link>
            </li>
            <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500">
              <NavLink
                to="#"
                className="stroke bg-transparent text-white"
                onClick={openModal}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="text-amber-500 text-xs">({cartLength})</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
