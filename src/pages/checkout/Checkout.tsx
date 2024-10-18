import { useState, useRef } from "react";

import CheckoutForm from "./CheckoutForm";
import Cart from "../../layout/cart/Cart";
import Success from "./Success";

import Modal from "../../utils/Modal";
import Error from "../../utils/Error";

import "./Checkout.css";

export default function Checkout() {
  //error states
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //modal for showing success
  const modal = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    setShowError(false);
    modal.current?.showModal();
  };

  const closeModal = () => {
    modal.current?.close();
  };

  const showErrorFn = (msg: string) => {
    setErrorMessage(msg);
    setShowError(true);
  };

  return (
    <div className="checkout-container">
      {showError && <Error errorMessage={errorMessage} />}
      <section className="checkout *:shadow-2xl">
        <Cart modalOrNot={false} closeModal={() => {}} />
        <CheckoutForm showSuccessMessage={openModal} showError={showErrorFn} />
        <Modal ref={modal}>
          <Success closeModal={closeModal} />
        </Modal>
      </section>
    </div>
  );
}
