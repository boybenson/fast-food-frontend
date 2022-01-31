import { lazy } from "react";

const Home = lazy(() => import("../pages/home/home-container"));
const SignIn = lazy(() => import("../pages/signin/signin-container"));
const SignUp = lazy(() => import("../pages/signup/signup-container"));
const StoreFront = lazy(() =>
  import("../pages/store-front/store-front-container")
);
const Category = lazy(() => import("../pages/category/category-container"));
const Cart = lazy(() => import("../pages/cart-screen/cart-screen-container"));

export const unProtectedRoutes = [
  { path: "/", element: <Home /> },
  {
    path: "/auth/signin",
    element: <SignIn />,
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
  },
  {
    path: "/en",
    element: <StoreFront />,
  },
  {
    path: "/en/category/:categoryName",
    element: <Category />,
  },
  {
    path: "/en/cart",
    element: <Cart />,
  },
];
