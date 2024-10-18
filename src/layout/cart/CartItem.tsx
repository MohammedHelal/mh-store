import { cartActions } from "../../store/cart-store";
import { useAppDispatch } from "../../store/hooks";

type CartItem = {
  id: string;
  name: string;
  price: string;
  itemNumber: number;
};

function CartItem({ cartItem }: { cartItem: CartItem }) {
  const dispatch = useAppDispatch();

  return (
    <>
      <li className="cart-item" key={cartItem.id}>
        <p className="max-w-[220px] lg:max-w-[350px] mb-0 text-wrap">
          {cartItem.name} - {cartItem.itemNumber} x{" "}
          <span className="text-teal-500 font-bold text-lg">
            ${cartItem.price}
          </span>
        </p>
        <div className="cart-item-actions">
          <button
            className="bg-teal-500 p-2 text-white rounded-full hover:bg-teal-700"
            onClick={() => dispatch(cartActions.decrement(cartItem.id))}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <p>{cartItem.itemNumber}</p>
          <button
            className="bg-teal-500 p-2 text-white rounded-full hover:bg-teal-700"
            onClick={() => dispatch(cartActions.increment(cartItem.id))}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </li>
      <hr className="border-stone-400" />
    </>
  );
}

export default CartItem;
