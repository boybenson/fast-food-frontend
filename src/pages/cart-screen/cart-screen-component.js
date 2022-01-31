import React from "react";
import Footer from "../../components/footer/footer-container";
import Header from "../../components/header/header-container";
import Cart from "../../components/cart/cart-container";
import OrderSummary from "../../components/order-summary/order-summary-container";

const CartComponent = () => {
  return (
    <div>
      <Header />
      <main className="py-4">
        <div className="my-0 mx-auto w-11/12 grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <div className="col-span-2">
            <Cart />
          </div>
          <div className="col-span-1">
            <OrderSummary />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartComponent;
