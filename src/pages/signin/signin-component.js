import React from "react";
import { Link } from "react-router-dom";
const SigninComponent = () => {
  return (
    <div>
      <header className="top-heading">
        <div className="w-11/12 my-0 mx-auto">
          <Link to="/">
            <img src="/assets/images/logo.svg" alt="logo" />
          </Link>
        </div>
      </header>

      <section className="bottom-heading w-11/12 my-0 mx-auto">
        <div className="grid grid-cols-2 items-center gap-x-20">
          <div className="">
            <img src="/assets/images/auth-image.svg" alt="pic" />
          </div>
          <div className="">
            <form className="w-1/2">
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
              <p className="my-2 text-right">Forget Password?</p>
              <div className="my-4">
                <input
                  type="submit"
                  value="Login"
                  className="w-full py-2 px-4 text-white bg-primary rounded-md cursor-pointer"
                />
              </div>
              <div className="flex gap-x-2">
                <p>Don't have an account ? </p>
                <Link to="/auth/signup" className="underline">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SigninComponent;
