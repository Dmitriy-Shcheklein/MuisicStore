import { gql } from '@apollo/client';

export const CHECK_USER_NAME = gql`
  query checkUserName($name: String) {
    checkUserName(name: $name) {
      name
    }
  }
`;

export const CHECK_USER_EMAIL = gql`
  query checkUserEmail($email: String) {
    checkUserEmail(email: $email) {
      email
    }
  }
`;

export const CHECK_USER_PASSWORD = gql`
  query checkUserPassword($password: String) {
    checkUserPassword(password: $password) {
      password
    }
  }
`;