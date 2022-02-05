import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query Query {
    getOrders {
      id
      address
      isDelivered
      totalPrice
      user {
        id
        email
        phone
        role
      }
      foods {
        name
        qtyToBuy
      }
    }
  }
`;
