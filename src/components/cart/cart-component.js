import React, { Fragment } from "react";

const CartComponent = ({ cartItems }) => {
  return (
    <Fragment>
      <div>
        <div>
          <div className="flex justify-between pb-7">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">3 Items</h2>
          </div>
          <hr
            style={{ color: "#EA421A", backgroundColor: "#EA421A", height: 2 }}
          />
          <div>
            {cartItems.length === 0 ? (
              <div>No items In cart</div>
            ) : (
              <div>
                {cartItems.map((item, index) => (
                  <div
                    className="flex justify-between items-center mt-6 py-6 border-b"
                    key={index}
                  >
                    <div className="flex items-center">
                      <img
                        src={item?.image}
                        width="60"
                        className="rounded-full"
                        alt="test"
                      />
                      <div className="flex flex-col ml-3">
                        <span className="md:text-md font-medium">
                          {item.name}
                        </span>
                        <span className="text-xs font-light text-gray-400">
                          GH₵ {item.price}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="pr-8 flex">
                        <span className="font-semibold">-</span>
                        <input
                          type="text"
                          className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                          defaultValue={1}
                        />
                        <span className="font-semibold">+</span>
                      </div>
                      <div className="pr-8">
                        <span className="text-xs font-medium">GH₵ 10.50</span>
                      </div>
                      <div>
                        <i className="fa fa-close text-xs font-medium"></i>
                      </div>
                      <div>
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
                {/* here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartComponent;
