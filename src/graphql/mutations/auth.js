import { gql } from "@apollo/client";

export const SIGNIN = gql`
  mutation Mutation($content: UserContent) {
    signIn(content: $content) {
      id
      email
      phone
      role
      accessToken
    }
  }
`;
