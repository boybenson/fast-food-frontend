import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_CATEGORY } from "../../graphql/queries/food";
import CategoryComponent from "./category-component";

const CategoryContainer = () => {
  const params = useParams();
  const { categoryName } = params;
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { categoryName },
    pollInterval: 100,
  });
  return (
    <CategoryComponent
      loading={loading}
      data={data?.getCategory}
      error={error}
      categoryName={categoryName}
    />
  );
};

export default CategoryContainer;
