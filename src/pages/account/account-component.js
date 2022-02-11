import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

const AccountComponent = ({
  accountLinks,
  OrderDetailsContainer,
  userInfo,
  customersContainer,
}) => {
  return (
    <div>
      <main className="py-4 ">
        <h1 className="w-11/12 md:w-9/12 my-0 mx-auto py-4 text-2xl font-mono font-semibold">
          My Accounts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 md:w-9/12 my-0 mx-auto shadow-2xl md:py-8 rounded-xl px-4">
          <div className="col-span-1 md:border-r-2 py-0 md:py-4">
            <div className="account-page-tabs flex  md:block mb-4">
              {accountLinks.map((link, index) => (
                <NavLink
                  to={link.path}
                  key={index}
                  className="py-2 md:py-4 px-4 my-2 flex items-center gap-x-4 hover:bg-primary hover:text-white"
                >
                  <span>{link.icon} </span> <p>{link.label}</p>
                </NavLink>
              ))}
              {userInfo?.role === "admin" && (
                <NavLink
                  to="customers"
                  className="py-2 md:py-4 px-4 my-2 flex items-center gap-x-4 hover:bg-primary hover:text-white"
                >
                  <span>
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>{" "}
                  <p>Customers</p>
                </NavLink>
              )}
            </div>
          </div>
          <div className="col-span-2 px-4 overflow-auto account-links-display-section">
            <div className="account-nav-links ">
              <Routes>
                {accountLinks.map((route, index) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  );
                })}
                <Route path="orders/:orderId" element={OrderDetailsContainer} />
                <Route path="customers" element={customersContainer} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountComponent;
