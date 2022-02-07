import React from "react";

const OrderDetailsComponent = ({ data, handleGoBack }) => {
  return (
    <div>
      <div className="">
        <button
          className="py-2 px-4 border-2 rounded-md flex gap-x-2 items-center"
          onClick={handleGoBack}
        >
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
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
          <p>Back</p>
        </button>
        <h3 className="text-2xl md:text-3xl font-mono text-gray-600">
          Order Details
        </h3>
        <p className="font-semibold text-sm text-gray-500 font-serif">
          Order Number {data?.id}
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl md:text-3xl font-mono text-gray-600">
          Shipping
        </h2>
        <p className="py-2 font-serif text-lg text-gray-500">
          Phone: {data?.user?.phone}
        </p>
        <p className="py-2 font-serif text-lg text-gray-500">
          Email: {data?.user?.email}
        </p>
        <p className="py-2 font-serif text-lg text-gray-500">
          Address: {data?.address}
        </p>
        {data?.isDelivered ? (
          <span className="relative inline-block px-4 py-2 font-semibold text-green-900 leading-tight w-full">
            <span
              aria-hidden
              className="absolute inset-0 bg-green-600 opacity-50 rounded-md w-full"
            ></span>
            <span className="relative">Delivered 🚀🚀🎉🎉</span>
          </span>
        ) : (
          <span className="relative inline-block px-4 py-2 font-semibold text-red-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Not Delivered 💀</span>
          </span>
        )}
      </div>
      <div className="mt-4">
        <h2 className="text-2xl md:text-3xl font-mono text-gray-600">
          Payment
        </h2>
        <p className="py-2 font-serif text-lg text-gray-500">
          method:{" "}
          {data?.paymentMethod === "cash_on_delivery"
            ? "Cash On Delivery"
            : "Mobile Money"}
        </p>
      </div>
      <div className="">
        <h2 className="text-2xl md:text-3xl font-mono text-gray-600">
          Ordered Items
        </h2>
        {data?.foods.map((food, index) => (
          <h1 key={index}>{food.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default OrderDetailsComponent;
