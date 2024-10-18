import { Link } from "react-router-dom";

function Success({ closeModal }) {

  return (
    <div className="cart">
      <h2>Success</h2>
      <p>Your order was submitted successfully.</p>
      <p>We will get back to you via email within the next few minutes.</p>
      <div className="modal-actions">
        <Link to="/">
          <button className="button" onClick={closeModal}>
            Okay
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
