import React from "react";

const OrderSummaryComponent = ({ cartItems, totalPrice }) => {
  return (
    <div className="bg-gray-200 rounded-lg py-2 my-2">
      <div className="px-4">
        <h1 className="font-bold text-gray-800 py-2 text-xl flex items-center gap-x-2">
          <p>Order Summary</p>
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
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        </h1>
        <hr
          style={{ color: "#EA421A", backgroundColor: "#EA421A", height: 2 }}
        />
        <div className="flex justify-between font-bold text-gray-500 sm py-2">
          <h3 className=" ">Items {cartItems.length}</h3>
          <h3> GH₵ {totalPrice}</h3>
        </div>
        <div className="flex justify-between font-bold text-gray-500 sm py-2">
          <h3 className=" ">Shipping Cost</h3>
          <h3> GH₵ 00.00</h3>
        </div>

        <div className="py-2">
          <input
            type="text"
            className="w-full py-2 px-2 rounded-lg"
            placeholder="Enter Location . . ."
          />
        </div>

        <div className="py-2">
          <select className="w-full py-2 px-2 rounded-lg">
            <option>Select Payment Method</option>
            <option>Cash On Delivery</option>
            <option>Mobile Money</option>
          </select>
        </div>

        <div className="flex justify-between font-bold text-gray-500 sm py-2">
          <h3 className=" ">Total Cost</h3>
          <h3> ₵ {totalPrice}</h3>
        </div>

        <div className="py-2">
          <button className="bg-gray-800 w-full py-2 text-white rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryComponent;
