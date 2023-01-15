import { gql } from 'apollo-server';

export const accountSchema = gql`
  input AccountTypes {
    sender: String!
    receiver: String!
    amount: Float!
  }

  type Account {
    balance: Float
    user: User
  }

  extend type Mutation {
    transaction(data: AccountTypes!): Boolean
    withdraw(_id: ID!, amount: Float!): Boolean
    deposit(_id: ID!, amount: Float!): Boolean
    createAccount(userId: ID!): Boolean
  }

  extend type Query {
    getAccount(_id: ID!): Account
    getBalance(_id: ID!): Float
  }
`;
