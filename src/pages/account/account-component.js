import React from "react";
import { NavLink } from "react-router-dom";

const AccountComponent = ({ accountLinks }) => {
  return (
    <div>
      <main className="py-4 ">
        <h1 className="w-9/12 my-0 mx-auto py-4 text-2xl font-mono font-semibold">
          My Accounts
        </h1>
        <div className="grid grid-cols-3 w-9/12 my-0 mx-auto shadow-2xl py-4 rounded-xl">
          <div className="col-span-1 border-r-2 py-4">
            <div>
              {accountLinks.map((link, index) => (
                <NavLink
                  to={link.path}
                  key={index}
                  className="py-4 px-4 my-2 flex items-center gap-x-4 hover:bg-primary hover:text-white"
                >
                  <span>{link.icon} </span> <p>{link.label}</p>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </main>
    </div>
  );
};

export default AccountComponent;
