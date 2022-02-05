import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation CreateOrder($content: OrderContent, $foods: [OrderedFoodContent]) {
    createOrder(content: $content, foods: $foods) {
      id
      address
      totalPrice
      foods {
        name
        id
        qtyToBuy
      }
      user {
        id
        email
        phone
      }
    }
  }
`;
