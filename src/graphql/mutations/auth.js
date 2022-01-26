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

export const SIGNUP = gql`
  mutation Mutation($phone: String, $content: UserContent) {
    signUp(phone: $phone, content: $content) {
      id
      email
      phone
      role
      accessToken
    }
  }
`;
