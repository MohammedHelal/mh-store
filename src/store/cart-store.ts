import { createSlice, configureStore } from "@reduxjs/toolkit";
import { UnknownAction } from "redux";
import { ThunkAction } from "redux-thunk";

interface CartState {
  cart: {
    id: string;
    name: string;
    price: string;
    itemNumber: number;
  }[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    set(state, action) {
      state.cart = [...action.payload];
    },
    addItem(state, action) {
      const availableItem = state.cart.find(
        (ele: { id: string }) => ele.id === action.payload.id
      );
      console.log(action.payload);

      if (availableItem === undefined) {
        const item = {
          id: action.payload.id,
          name: action.payload.title,
          price: action.payload.price,
          itemNumber: 1,
        };

        state.cart.push(item);
      }
    },
    increment(state, action) {
      //let index;
      const index = state.cart.findIndex((e) => e.id === action.payload);

      console.log(index);

      state.cart[index].itemNumber++;
    },
    decrement(state, action) {
      const index = state.cart.findIndex((e) => e.id === action.payload);

      if (state.cart[index].itemNumber > 1) {
        state.cart[index].itemNumber--;
      } else {
        const newState = state.cart.filter((e) => e.id !== action.payload);
        state.cart = [...newState];
      }
    },
    clear(state) {
      state.cart = [];
    },
  },
});

export function fetchCart(): ThunkAction<
  void,
  RootState,
  unknown,
  UnknownAction
> {
  return (dispatch) => {
    async function fetchItems() {
      const cart = await JSON.parse(localStorage.getItem("cart") || "");

      if (cart) {
        dispatch(cartActions.set(cart));
      }
    }

    fetchItems();
  };
}

const store = configureStore({ reducer: cartSlice.reducer });

export const cartActions = cartSlice.actions;
export default store;

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
