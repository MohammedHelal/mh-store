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
      <nav className="w-full bg-[#213547] mb-[100px]">
        <div className="flex items-center justify-between max-w-[1440px] mx-auto py-2 text-white">
          <div className="w-[60px] h-[60px] m-2.5 flex items-center rounded-full bg-gray-700 cursor-pointer">
            <img className="w-[60px] h-[60px] " src={Logo} alt="Logo" />
          </div>
          <DropDown cartLength={cart.length} openModal={openModal} />
          <ul
            className={`hidden md:flex items-center justify-between mr-[15px] list-none m-0 lg:h-[80px]`}
          >
            <li className="inline py-[10px] px-[25px]">
              <NavLink to="/" className="stroke">
                Home
              </NavLink>
            </li>
            <li className="inline py-[10px] px-[25px]">
              <NavLink to="/products" className="stroke">
                Products
              </NavLink>
            </li>
            <li className="inline py-[10px] pl-[25px]">
              <NavLink
                to="#"
                className="stroke bg-transparent text-white"
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
    </>
  );
}

export default Navbar;
