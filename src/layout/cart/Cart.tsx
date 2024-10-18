import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";
import { useCalculateCartTotal } from "../../utils/cartTotal";
import Error from "../../utils/Error";

function Cart({
  modalOrNot,
  closeModal,
}: {
  modalOrNot: boolean;
  closeModal: () => void;
}) {
  //Error states
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //redux store
  const cart = useAppSelector((store) => store.cart);
  //react router navigation for error handling
  const navigate = useNavigate();

  function checkoutErrorHandler() {
    //check if cart is empty before going to checkout
    if (cart.length > 0) {
      navigate("checkout");
      closeModal();
      return;
    }

    showErrorFn("Please select some items to proceed.");
  }

  const showErrorFn = (msg: string) => {
    setErrorMessage(msg);
    setShowError(true);
  };
  return (
    <div className="cart">
      {showError && <Error errorMessage={errorMessage} />}
      <div>
        <h2 className="mb-[2rem]">Your Cart</h2>
        <ul className="md:max-h-[350px] overflow-auto">
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </ul>
      </div>
      <div className="bottom-part">
        <div className="cart-total">
          <h3 className={`${!modalOrNot && "mb-0"}`}>Total</h3>
          <h3 className={`${!modalOrNot && "mb-0"}`}>
            ${useCalculateCartTotal()}
          </h3>
        </div>
        {modalOrNot && (
          <form method="dialog" className="modal-actions">
            <button
              className="text-[var(--text-color)] bg-transparent hover:bg-transparent hover:text-amber-700"
              onClick={() => setShowError(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="bg-teal-500 hover:bg-teal-700 px-[25px] py-[5px] text-white"
              onClick={checkoutErrorHandler}
            >
              Go To Checkout
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Cart;
