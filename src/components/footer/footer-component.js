import React from "react";

const FooterComponent = ({ support, followUs, countries, joinUs }) => {
  return (
    <footer className="bg-footerBgColor">
      <div className="w-11/12 my-0 mx-auto py-12">
        <section className="flex gap-x-4 items-start py-6">
          <div>
            <img src="/assets/images/logo.svg" alt="logo" />
          </div>
          <ul>
            <h4 className="font-bold text-white text-xl">support</h4>
            {support.map((data, index) => (
              <li key={index} className="text-sm text-gray-500 mt-2">
                {data.label}
              </li>
            ))}
          </ul>
          <ul>
            <h4 className="font-bold text-white text-xl">Follow Us</h4>
            {followUs.map((data, index) => (
              <li key={index} className="text-sm text-gray-500 mt-2">
                {data.label}
              </li>
            ))}
          </ul>
          <ul>
            <h4 className="font-bold text-white text-xl">Countries</h4>
            {countries.map((data, index) => (
              <li key={index} className="text-sm text-gray-500 mt-2">
                {data.label}
              </li>
            ))}
          </ul>
          <ul className="hidden m:block">
            <h4 className="font-bold text-white text-xl">Join Us</h4>
            {joinUs.map((data, index) => (
              <li key={index} className="text-sm text-gray-500 mt-2">
                {data.label}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex justify-between items-center mt-4">
          <div className="flex gap-x-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Fedup Co. All rights reserved.
            </p>
            <p className="text-white text-xs">Terms Of Service</p>
            <p className="text-white text-xs">Privacy</p>
          </div>
          <div>
            <img
              src="/assets/images/stores.svg"
              alt="stores logos"
              className="w-9/12"
            />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default FooterComponent;
