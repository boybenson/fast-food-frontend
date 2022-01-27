import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { RotateSpinner } from "react-spinners-kit";
import TextField from "../../components/fields/text-field";
import Footer from "../../components/footer/footer-container";
import HeaderContainer from "../../components/header/header-container";
import { signUpFormValidate } from "../../helpers/forms-validate";
const SignupComponent = ({ initialValues, handleSubmit, loading }) => {
  return (
    <div>
      <HeaderContainer />
      <section className="py-10 w-11/12 my-0 mx-auto">
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 items-center gap-x-20">
          <div className="">
            <img src="/assets/images/auth-image.svg" alt="pic" />
          </div>
          <div className="flex justify-center">
            <Formik
              initialValues={initialValues}
              validate={signUpFormValidate}
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
                <form className="w-11/12" onSubmit={handleSubmit}>
                  <h4 className="text-center font-bold text-2xl">
                    Create An Account
                  </h4>
                  <div className="my-4">
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
                    <TextField
                      type="tel"
                      placeholder="0546949655"
                      name="phone"
                      value={values.phone}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      touched={touched}
                      errors={errors}
                    />
                  </div>
                  <div className="my-4">
                    <TextField
                      type="password"
                      placeholder="password"
                      name="password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      touched={touched}
                      errors={errors}
                    />
                  </div>
                  <div>
                    <small>
                      By Signing up, you agree to our{" "}
                      <b className="font-bold underline cursor-pointer">
                        Terms & Conditions
                      </b>{" "}
                      and{" "}
                      <b className="font-bold underline cursor-pointer">
                        Privacy Statement
                      </b>
                    </small>
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
                        <p>Sign Up</p>
                      )}
                    </button>
                  </div>
                  <div className="flex gap-x-2">
                    <p>Already have an account ? </p>
                    <Link to="/auth/signin" className="underline">
                      Sign in
                    </Link>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignupComponent;
