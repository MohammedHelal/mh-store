import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

import { cartActions } from "../../store/cart-store";

import {
  isNameValid,
  isEmailValid,
  isAddressValid,
  isPostalValid,
  isCityValid,
} from "../../utils/form-validation";

const errorStyle = {
  color: "red",
  margin: 0,
};

function CheckoutForm({
  showSuccessMessage,
  showError,
}: {
  showSuccessMessage: () => void;
  showError: (arg0: string) => void;
}) {
  const [formErrors, setFormErrors] = useState({
    nameError: false,
    emailError: false,
    streetError: false,
    postalError: false,
    cityError: false,
  });

  const cart = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const id = target ? target.id : "";

    if (id === "name") {
      setFormErrors((prevState) => ({ ...prevState, nameError: false }));
    }
    if (id === "email") {
      setFormErrors((prevState) => ({ ...prevState, emailError: false }));
    }
    if (id === "street") {
      setFormErrors((prevState) => ({ ...prevState, streetError: false }));
    }
    if (id === "postal-code") {
      setFormErrors((prevState) => ({ ...prevState, postalError: false }));
    }
    if (id === "city") {
      setFormErrors((prevState) => ({ ...prevState, cityError: false }));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;

    const fd = new FormData(target);
    const data = Object.fromEntries(fd.entries());

    //validations
    if (!isNameValid(data.name)) {
      setFormErrors((prevState) => ({ ...prevState, nameError: true }));
    }
    if (!isEmailValid(data.email)) {
      setFormErrors((prevState) => ({ ...prevState, emailError: true }));
    }
    if (!isAddressValid(data.street)) {
      setFormErrors((prevState) => ({ ...prevState, streetError: true }));
    }
    if (!isPostalValid(data["postal-code"])) {
      setFormErrors((prevState) => ({ ...prevState, postalError: true }));
    }
    if (!isCityValid(data.city)) {
      setFormErrors((prevState) => ({ ...prevState, cityError: true }));
    }

    if (
      !isNameValid(data.name) ||
      !isEmailValid(data.email) ||
      !isAddressValid(data.street) ||
      !isPostalValid(data["postal-code"]) ||
      !isCityValid(data.city)
    ) {
      return;
    }
    //sending cart Data
    if (cart.length > 0) {
      dispatch(cartActions.clear());
      showSuccessMessage();

      return;
    }

    showError("Please select some items to proceed.");
  }

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div className="control">
        <label htmlFor="name">Full Name</label>
        <input
          className="block py-1 px-4 w-full rounded-md mt-[5px]"
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
        />
        {formErrors.nameError && (
          <p className="mb-[10px] text-xs" style={errorStyle}>
            Name can't be empty.
          </p>
        )}
      </div>
      <div className="control">
        <label htmlFor="email">E-mail Address</label>
        <input
          className="block py-1 px-4 w-full rounded-md mt-[5px]"
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
        />
        {formErrors.emailError && (
          <p className="mb-[10px] text-xs" style={errorStyle}>
            Please enter a valid e-mail address.
          </p>
        )}
      </div>
      <div className="control">
        <label htmlFor="street">Address</label>
        <input
          className="block py-1 px-4 w-full rounded-md mt-[5px]"
          id="street"
          name="street"
          type="text"
          onChange={handleChange}
        />
        {formErrors.streetError && (
          <p className="mb-[10px] text-xs" style={errorStyle}>
            Address can't be empty.
          </p>
        )}
      </div>
      <div className="control-row">
        <div className="control">
          <label htmlFor="postal-code">Postal Code</label>
          <input
            className="block py-1 px-4 w-full rounded-md mt-[5px]"
            id="postal-code"
            name="postal-code"
            type="text"
            onChange={handleChange}
          />
          {formErrors.postalError && (
            <p className="mb-[10px] text-xs" style={errorStyle}>
              Postal code can't be empty.
            </p>
          )}
        </div>
        <div className="control">
          <label htmlFor="city">City</label>
          <input
            className="block py-1 px-4 w-full rounded-md mt-[5px]"
            id="city"
            name="city"
            type="text"
            onChange={handleChange}
          />
          {formErrors.cityError && (
            <p className="mb-[10px] text-xs" style={errorStyle}>
              City can't be empty.
            </p>
          )}
        </div>
      </div>
      <div className="mt-[25px] md:absolute md:w-[calc(100%-20px)] lg:w-[calc(100%-64px)] bottom-[25px]">
        <button type="submit" className="w-full py-2">
          Submit Order
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
