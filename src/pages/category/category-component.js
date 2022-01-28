import React from "react";
import Header from "../../components/header/header-container";
import Footer from "../../components/footer/footer-container";
import OrderSummaryContainer from "../../components/order-summary/order-summary-container";

const CategoryComponent = () => {
  return (
    <div>
      <Header />
      <main className="py-2">
        <div className="my-0 mx-auto w-11/12 grid grid-cols-3">
          <div className=" col-span-2">Category Details</div>
          <div className="shadow-lg col-span-1">
            <OrderSummaryContainer />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryComponent;
