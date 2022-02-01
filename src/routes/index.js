import { lazy } from "react";

const StoreFront = lazy(() =>
  import("../pages/store-front/store-front-container")
);
const Home = lazy(() => import("../pages/home/home-container"));
const SignIn = lazy(() => import("../pages/signin/signin-container"));
const SignUp = lazy(() => import("../pages/signup/signup-container"));
const Category = lazy(() => import("../pages/category/category-container"));
const Cart = lazy(() => import("../pages/cart-screen/cart-screen-container"));
const Account = lazy(() => import("../pages/account/account-container"));

export const unProtectedRoutes = [
  { path: "/", element: <Home />, protected: false },
  {
    path: "/auth/signin",
    element: <SignIn />,
    protected: false,
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
    protected: false,
  },
  {
    path: "/en",
    element: <StoreFront />,
    protected: false,
  },
  {
    path: "/en/category/:categoryName",
    element: <Category />,
    protected: false,
  },
  {
    path: "/en/cart",
    element: <Cart />,
    protected: false,
  },
  {
    path: "/en/account",
    element: <Account />,
    protected: true,
  },
];
