import { gql } from '@apollo/client';

export const ADD_NEW_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      name
    }
  }
`;