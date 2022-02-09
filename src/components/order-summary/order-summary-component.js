import React from "react";
import { Formik } from "formik";
import { RotateSpinner } from "react-spinners-kit";
import TextField from "../fields/text-field";
import { checkoutFormValidate } from "../../helpers/forms-validate";

const OrderSummaryComponent = ({
  cartItems,
  totalPrice,
  initialValues,
  handleSubmit,
  loading,
}) => {
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

        <Formik
          initialValues={initialValues}
          validate={checkoutFormValidate}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="py-2">
                <TextField
                  type="text"
                  placeholder="Enter Location..."
                  name="location"
                  value={values.location}
                  onBlur={handleBlur}
                  className="w-full py-2 px-2 rounded-lg"
                  onChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </div>

              <div className="py-2">
                <select
                  className="w-full py-2 px-2 rounded-lg"
                  value={values.paymentMethod}
                  name="paymentMethod"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                >
                  <option label="Select Payment Method" value="" />
                  <option value="cash_on_delivery" label="Cash On Delivery" />
                  <option value="momo" label="Mobile Money or Bank Card" />
                </select>
                {errors.paymentMethod && touched.paymentMethod && (
                  <p className="text-red-500">{errors.paymentMethod}</p>
                )}
              </div>

              <div className="flex justify-between font-bold text-gray-500 sm py-2">
                <h3 className=" ">Total Cost</h3>
                <h3>₵ {totalPrice}</h3>
              </div>

              <div className="py-2">
                <button
                  className="bg-gray-800 w-full py-2 text-white rounded-lg cursor-pointer text-center flex justify-center"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {loading ? (
                    <div className="flex justify-center gap-x-4">
                      <RotateSpinner size={25} color="white" />
                      <p>Processing...</p>
                    </div>
                  ) : (
                    <p>checkout</p>
                  )}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default OrderSummaryComponent;
