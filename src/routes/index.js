import { lazy } from "react";

const Home = lazy(() => import("../pages/home/home-container"));
const SignIn = lazy(() => import("../pages/signin/signin-container"));
const SignUp = lazy(() => import("../pages/signup/signup-container"));
const StoreFront = lazy(() =>
  import("../pages/store-front/store-front-container")
);

export const outerRoutes = [
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
];
