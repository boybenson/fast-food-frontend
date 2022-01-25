import React from "react";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import HeaderContainer from "../../components/header/header-container";
import FooterContainer from "../../components/footer/footer-container";
import { signInFormValidate } from "../../helpers/forms-validate";
import TextField from "../../components/fields/text-field";
const SigninComponent = ({ initialValues, handleSubmit }) => {
  return (
    <div>
      <HeaderContainer />
      <section className="py-10 w-11/12 my-0 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-20">
          <div className="">
            <img src="/assets/images/auth-image.svg" alt="pic" />
          </div>
          <div className="flex justify-center">
            <Formik
              initialValues={initialValues}
              validate={signInFormValidate}
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
                  <h4 className="text-center font-bold text-2xl">Login</h4>
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
                  <p className="my-2 text-right">Forgot Password?</p>
                  <div className="my-4">
                    <input
                      type="submit"
                      disabled={isSubmitting}
                      value="Sign In"
                      className="w-full py-2 px-4 text-white bg-primary rounded-md cursor-pointer"
                    />
                  </div>
                  <div className="flex gap-x-2">
                    <p>Don't have an account ? </p>
                    <NavLink to="/auth/signup" className="underline">
                      Sign up
                    </NavLink>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>

      <FooterContainer />
    </div>
  );
};

export default SigninComponent;
