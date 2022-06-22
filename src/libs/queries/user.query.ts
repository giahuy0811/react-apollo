import { gql } from '@apollo/client';




const GET_USERS = gql`
  query users{
    users {
      id
      email
      phone
      role
    }
  } 
`;

export {GET_USERS}