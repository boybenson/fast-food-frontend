import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

const AccountComponent = ({ accountLinks, OrderDetailsContainer }) => {
  return (
    <div>
      <main className="py-4 ">
        <h1 className="w-11/12 md:w-9/12 my-0 mx-auto py-4 text-2xl font-mono font-semibold">
          My Accounts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 md:w-9/12 my-0 mx-auto shadow-2xl md:py-8 rounded-xl">
          <div className="col-span-1 border-r-2 py-0 md:py-4">
            <div className="account-page-tabs flex flex-wrap md:block mb-4">
              {accountLinks.map((link, index) => (
                <NavLink
                  to={link.path}
                  key={index}
                  className="py-2 md:py-4 px-4 my-2 flex items-center gap-x-4 hover:bg-primary hover:text-white"
                >
                  <span>{link.icon} </span> <p>{link.label}</p>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="col-span-2 px-4">
            <div className="account-nav-links">
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
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountComponent;
