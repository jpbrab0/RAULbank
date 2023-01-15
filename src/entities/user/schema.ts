import { gql } from 'apollo-server';

export const userSchema = gql`
  input UserTypes {
    username: String!
    email: String!
    documentType: String!
    document: String!
    password: String!
  }

  type User {
    username: String!
    email: String!
    documentType: String!
    document: String!
  }

  extend type Mutation {
    createUser(data: UserTypes!): Boolean
  }

  extend type Query {
    getUser(userId: ID!): User!
  }
`;
