import React from "react";
import { Formik } from "formik";
import { RotateSpinner } from "react-spinners-kit";
import TextField from "../../../../components/fields/text-field";

const PersonalInfoComponent = ({ userInfo, initialValues, loading }) => {
  return (
    <div>
      <h3 className="font-semibold text-xl text-gray-500">
        My Personal Information
      </h3>
      <div className="py-4">
        <Formik initialValues={initialValues}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className="w-11/12" onSubmit={handleSubmit}>
              <div className="my-4">
                <h6 className="py-2 text-gray-600 font-semibold">User ID:</h6>
                <TextField
                  name="id"
                  value={values.id}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  touched={touched}
                  errors={errors}
                  disabled
                  className="border border-gray-600 bg-gray-300 w-full py-2 px-4 rounded-md"
                />
              </div>
              <div className="my-4">
                <h6 className="py-2 text-gray-600 font-semibold">Role :</h6>
                <TextField
                  name="role"
                  value={values.role}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  touched={touched}
                  errors={errors}
                  disabled
                  className="border border-gray-600 bg-gray-300 w-full py-2 px-4 rounded-md"
                />
              </div>
              <div className="my-4">
                <h6 className="py-2 text-gray-600 font-semibold">
                  Email Address:
                </h6>
                <TextField
                  type="email"
                  placeholder="email"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </div>
              <div className="my-4">
                <h6 className="py-2 text-gray-600 font-semibold">
                  Phone Number:
                </h6>
                <TextField
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </div>
              <div className="my-4">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-2 px-4 text-white bg-primary rounded-md cursor-pointer text-center flex justify-center"
                >
                  {loading ? (
                    <RotateSpinner size={25} color="white" />
                  ) : (
                    <p>Update</p>
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

export default PersonalInfoComponent;
