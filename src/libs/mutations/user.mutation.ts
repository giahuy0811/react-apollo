import {gql} from '@apollo/client'



const CREATE_USER = gql`
  mutation createUser($email: String!, $phone: String!, $role: String!, $password: String!){
     createUser(email: $email,phone: $phone, role: $role, password: $password){
      id
      email
      phone
      role
     }
  }
`

export {CREATE_USER}