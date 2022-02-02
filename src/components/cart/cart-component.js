import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const CartComponent = ({
  cartItems,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) => {
  return (
    <Fragment>
      <div>
        <div>
          <div className="flex justify-between pb-7">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
          </div>
          <hr
            style={{ color: "#EA421A", backgroundColor: "#EA421A", height: 2 }}
          />
          <div>
            {cartItems.length === 0 ? (
              <div>
                <div>
                  <p className="py-4 text-gray-800 text-xl">
                    Opps!🥺 Nothing in Cart Yet.
                  </p>
                  <NavLink to="/en">
                    <p className="py-2 text-primary text-xl flex items-center gap-x-2">
                      Continue Shopping
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </p>
                  </NavLink>
                </div>
              </div>
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
                        <button onClick={() => decreaseQty(item)}>
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
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                          value={item.qtyToBuy}
                          readOnly
                        />
                        <button onClick={() => increaseQty(item)}>
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
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="pr-8">
                        <span className="text-xs font-medium">
                          GH₵ {(item.qtyToBuy * item.price).toFixed(2)}
                        </span>
                      </div>
                      <div>
                        <i className="fa fa-close text-xs font-medium"></i>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 cursor-pointer"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          onClick={() => removeFromCart(item)}
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
