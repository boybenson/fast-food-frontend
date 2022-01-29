import { useQuery } from "@apollo/client";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_CATEGORY } from "../../graphql/queries/food";
import { handleAddToCart } from "../../helpers/cart";
import CategoryComponent from "./category-component";

const CategoryContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { categoryName } = params;
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { categoryName },
    pollInterval: 100,
  });

  const addToCart = (food) => {
    handleAddToCart(food, dispatch, cartItems);
  };

  return (
    <CategoryComponent
      loading={loading}
      data={data?.getCategory}
      error={error}
      categoryName={categoryName}
      dispatch={dispatch}
      addToCart={addToCart}
    />
  );
};

export default CategoryContainer;
