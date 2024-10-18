import { forwardRef, ReactNode } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef<HTMLDialogElement, { children: ReactNode }>(
  function Modal({ children }, ref) {
    return createPortal(
      <dialog ref={ref} className="modal">
        {children}
      </dialog>,
      document.getElementById("modal")!
    );
  }
);

export default Modal;
