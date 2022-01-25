import React from "react";
import { NavLink } from "react-router-dom";
import HeaderContainer from "../../components/header/header-container";
import FooterContainer from "../../components/footer/footer-container";
const SigninComponent = () => {
  return (
    <div>
      <HeaderContainer />

      <section className="py-10 w-11/12 my-0 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-20">
          <div className="">
            <img src="/assets/images/auth-image.svg" alt="pic" />
          </div>
          <div className="flex justify-center">
            <form className="w-11/12">
              <h4 className="text-center font-bold text-2xl">Login</h4>
              <div className="my-4">
                <input
                  type="email"
                  className="border border-gray-600 w-full py-2 px-4 rounded-md"
                  placeholder="email"
                />
              </div>
              <div className="my-4">
                <input
                  type="password"
                  className="border border-gray-600 w-full  py-2 px-4 rounded-md"
                  placeholder="password"
                />
              </div>
              <p className="my-2 text-right">Forgot Password?</p>
              <div className="my-4">
                <input
                  type="submit"
                  value="Login"
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
          </div>
        </div>
      </section>

      <FooterContainer />
    </div>
  );
};

export default SigninComponent;
