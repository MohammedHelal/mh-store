import { useAppSelector } from "../store/hooks";

export function useCalculateCartTotal() {
  const cart = useAppSelector((store) => store.cart);

  const total = cart.reduce(
    (acc, cartItem) => acc + parseFloat(cartItem.price) * cartItem.itemNumber,
    0
  );

  return total.toFixed(2);
}
