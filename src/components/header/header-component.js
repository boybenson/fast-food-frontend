import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = ({
  userInfo,
  cartItems,
  bg,
  handleLogout,
  toggleNav,
  showDropDown,
}) => {
  return (
    <div className={`border shadow-sm sticky top-0 ${bg ?? "bg-white"}`}>
      <section className="flex justify-between w-11/12 my-0 mx-auto items-center  top-heading">
        {!userInfo && (
          <div className="hidden md:block">
            <div className="flex gap-x-4">
              <NavLink
                to="/en"
                className="py-2 px-6 rounded-2xl  border-2 border-gray-400"
              >
                foods/Dish
              </NavLink>
              <NavLink
                to="/auth/signup"
                className="bg-primary text-white py-2 px-4 rounded-2xl"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        )}

        {userInfo && (
          <div className="hidden md:block">
            <div className="flex gap-x-4 items-center">
              <NavLink
                to="/en/account/personal-info"
                className="py-2 px-2 rounded-md flex gap-x-2"
              >
                <p>My Account</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </NavLink>
              |
              {userInfo?.role === "customer" && (
                <div className="">
                  <NavLink to="/en/cart">
                    <span role="button" className="relative flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="absolute right-0 top-0 rounded-full bg-primary w-5 h-5 top right p-0 text-white font-mono text-md  leading-tight text-center">
                        {cartItems?.length}
                      </span>
                    </span>
                  </NavLink>
                </div>
              )}
              |
              <button
                className="bg-primary text-white px-2 rounded-lg flex items-center py-2 gap-x-2"
                onClick={() => handleLogout()}
              >
                <p className="text-xs">Logout</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* mobile view menu icons */}
        {/* menu bar */}
        <div className="flex items-center gap-x-4 md:hidden">
          {!showDropDown && (
            <span onClick={toggleNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 shadow-sm"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </span>
          )}

          {showDropDown && (
            <span onClick={toggleNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 shadow-sm"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          )}

          <div className="">
            <NavLink to="/en/cart">
              <span role="button" className="relative flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute right-0 top-0 rounded-full bg-primary w-5 h-5 top right p-0 text-white font-mono text-md  leading-tight text-center">
                  {cartItems?.length}
                </span>
              </span>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderComponent;
