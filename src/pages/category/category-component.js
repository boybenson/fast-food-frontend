import React from "react";
import OrderSummaryContainer from "../../components/order-summary/order-summary-container";

const CategoryComponent = ({ data, categoryName, addToCart }) => {
  return (
    <div>
      <main className="py-2">
        <h1 className="my-0 mx-auto w-11/12 font-mono text-xl md:text-3xl px-2 py-4">
          Best {categoryName} In Town
        </h1>
        <div className="my-0 mx-auto w-11/12 grid grid-cols-1 md:grid-cols-3 gap-x-2">
          <div className=" col-span-2 grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-4">
            {data?.map((food, index) => (
              <div className="col-span-1 rounded-lg  bg-white px-2" key={index}>
                <img className="w-full" src={food.image} alt="img" />
                <div className="px -6 py-4">
                  <div className="font-bold text-xl mb-2">{food.name}</div>
                  <p>Price : GH₵ {food.price}</p>
                </div>
                <div>
                  <button
                    className="bg-primary w-full py-2 text-white rounded-lg"
                    onClick={() => addToCart(food)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="shadow-lg col-span-1">
            <OrderSummaryContainer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoryComponent;
