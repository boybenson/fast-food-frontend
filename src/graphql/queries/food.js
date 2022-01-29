import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
  query Query($categoryName: String) {
    getCategory(categoryName: $categoryName) {
      name
      price
      id
      description
      image
      category
      cookingDuration
    }
  }
`;
