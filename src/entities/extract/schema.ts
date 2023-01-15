import { gql } from 'apollo-server';

export const extractSchema = gql`
  scalar Date

  enum Name {
    TRANSACTION
    DEPOSIT
    WITHDRAW
    PAYMENT
  }

  type Extract {
    name: Name
    info: String!
    amount: Float!
    date: Date
    account: ID!
  }

  extend type Query {
    getExtract(accountId: ID!): Extract
    getExtractById(itemId: ID!): Extract
  }
`;
