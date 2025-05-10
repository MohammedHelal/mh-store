import { useState, useRef } from "react";
import { useAppSelector } from "../store/hooks";
import Logo from "../assets/Logo2.png";
import { NavLink } from "react-router-dom";
import Modal from "../utils/Modal";
import Cart from "./cart/Cart";
import DropDown from "./DropDown";

function Navbar() {
  const [modalOrNot, setModalOrNot] = useState(false);
  const modal = useRef<HTMLDialogElement>(null);
  const cart = useAppSelector((store) => store.cart);

  const closeModal = () => {
    setModalOrNot(false);
    modal.current?.close();
  };

  const openModal = () => {
    setModalOrNot(true);
    modal.current?.showModal();
  };

  return (
    <>
      <nav className="w-full mb-[0px]">
        <div className=" max-w-[1440px] mx-auto py-2 text-black">
          <div className="w-[60px] h-[60px] my-2.5 mx-auto flex items-center rounded-full bg-gray-700 cursor-pointer">
            <img className="w-[60px] h-[60px] " src={Logo} alt="Logo" />
          </div>
          <DropDown cartLength={cart.length} openModal={openModal} />
          <ul
            className={`hidden md:flex items-center justify-center list-none m-0 lg:h-[80px]`}
          >
            <li className="inline py-[10px] px-[25px] mx-[50px]">
              <NavLink to="/" className="stroke">
                Home
              </NavLink>
            </li>
            <li className="inline py-[10px] px-[25px] mx-[50px]">
              <NavLink to="/" className="stroke">
                Products
              </NavLink>
            </li>
            <li className="inline py-[10px] px-[25px] mx-[50px]">
              <NavLink
                to="#"
                className="stroke bg-transparent text-black"
                onClick={openModal}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="text-amber-500 text-xs">({cart.length})</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <Modal ref={modal}>
          <Cart modalOrNot={modalOrNot} closeModal={closeModal} />
        </Modal>
      </nav>
      <div className="mb-[50px] mx-[60px]">
        <hr className="" />
      </div>
    </>
  );
}

export default Navbar;
