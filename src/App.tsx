//import { useState, useEffect } from "react";
//import { useAppSelector, useAppDispatch } from "./store/hooks";
//import { fetchCart } from "./store/cart-store";

import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Checkout from "./pages/checkout/Checkout";
import RootLayout from "./layout/RootLayout";
import "./App.css";

function App() {
  /*const [initialMount, setInitialMount] = useState(true);

  //redux store cart and dispatch
  const cart = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  //fetching cart info from local storage on first render
  useEffect(() => {
    dispatch(fetchCart());
  });

  
  //sending data to local storage with any change to the cart
  useEffect(() => {
    //using initial mount state to not send data on initial mount/load
    if (initialMount) {
      setInitialMount(false);
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);*/

  const paths: RouteObject[] = [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(paths);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

/*

        
*/
