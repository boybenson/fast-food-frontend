import { lazy } from "react";

const Home = lazy(() => import("../pages/home/home-container"));
const SignIn = lazy(() => import("../pages/signin/signin-container"));
const SignUp = lazy(() => import("../pages/signup/signup-container"));

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
];
