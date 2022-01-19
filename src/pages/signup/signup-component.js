import React from "react";
import { Link } from "react-router-dom";
const SignupComponent = () => {
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
              <h4 className="text-center font-bold text-2xl">
                Create An Account
              </h4>
              <div className="my-4">
                <input
                  type="email"
                  className="border border-gray-600 w-full py-2 px-4 rounded-md"
                  placeholder="email"
                />
              </div>
              <div className="my-4 grid grid-cols-4 gap-x-2">
                <input
                  typeo="text"
                  value="+233"
                  className="border border-gray-600 py-2 px-4 rounded-md col-span-1 bg-gray-200"
                  disabled
                />
                <input
                  type="tel"
                  className="border border-gray-600 w-full py-2 px-4 rounded-md col-span-3"
                  placeholder="546949655"
                  maxLength={9}
                />
              </div>
              <div className="my-4">
                <input
                  type="password"
                  className="border border-gray-600 w-full  py-2 px-4 rounded-md"
                  placeholder="password"
                />
              </div>
              <div>
                <small>
                  By Signing up, you agree to our{" "}
                  <b className="font-bold">Terms and Conditions</b> and{" "}
                  <b>Privacy Statement</b>
                </small>
              </div>
              <div className="my-4">
                <input
                  type="submit"
                  value="sign up"
                  className="w-full py-2 px-4 text-white bg-primary rounded-md cursor-pointer"
                />
              </div>
              <div className="flex gap-x-2">
                <p>Already have an account ? </p>
                <Link to="/auth/signin" className="underline">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupComponent;
