import React from "react";
import { NavLink } from "react-router-dom";
import { RotateSpinner } from "react-spinners-kit";

const OrdersComponent = ({ loading, orders, userInfo, error }) => {
  return (
    <div>
      <h3 className="font-semibold text-xl text-gray-500">
        {userInfo.role === "customer" ? "My Orders" : "All Orders"}
      </h3>
      <div className="py-2">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Total Price
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {orders &&
                  orders.map((order, index) => (
                    <tr key={index}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {`${order.id.slice(0, 7)}...`}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          GH₵ {order.totalPrice.toFixed(2)}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {order.isDelivered ? (
                          <span className="relative inline-block px-4 py-2 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Delivered🎉🚀</span>
                          </span>
                        ) : (
                          <span className="relative inline-block px-4 py-2 font-semibold text-red-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Processing😁</span>
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <NavLink to={`${order?.id}`}>
                          <p className="text-primary whitespace-no-wrap underline cursor-pointer">
                            Details
                          </p>
                        </NavLink>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {loading && (
              <div className="flex justify-center py-8">
                <RotateSpinner size={45} color="red" />
              </div>
            )}
            {error && (
              <div className="flex justify-center py-8">
                <span className="relative inline-block px-4 py-2 font-semibold text-red-900 leading-tight">
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                  ></span>
                  <span className="relative">{error?.message}</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersComponent;
