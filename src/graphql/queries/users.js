import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Query {
    getUsers {
      id
      email
      phone
    }
  }
`;
