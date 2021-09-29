import { gql } from '@apollo/client';

export const CHECK_USER_NAME = gql`
  query checkUserName($name: String) {
    checkUserName(name: $name) {
      name
    }
  }
`;