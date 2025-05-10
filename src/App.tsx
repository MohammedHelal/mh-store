//import { useState, useEffect } from "react";
//import { useAppSelector, useAppDispatch } from "./store/hooks";
//import { fetchCart } from "./store/cart-store";

import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

//import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Checkout from "./pages/checkout/Checkout";
import RootLayout from "./layout/RootLayout";
import "./App.css";

function App() {
  const paths: RouteObject[] = [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(paths, {
    basename: "/mh-store",
  });

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
