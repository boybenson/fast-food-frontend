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

export const GET_ORDER = gql`
  query ExampleQuery($orderId: String!) {
    getOrder(orderId: $orderId) {
      user {
        email
        phone
      }
      id
      address
      totalPrice
      isDelivered
      foods {
        name
        price
        qtyToBuy
        image
      }
      paymentMethod
    }
  }
`;
