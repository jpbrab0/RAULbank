import { gql } from 'apollo-server';

import { accountResolver } from './account/resolvers';
import { accountSchema } from './account/schema';
import { extractResolver } from './extract/resolvers';
import { extractSchema } from './extract/schema';
import { userResolver } from './user/resolvers';
import { userSchema } from './user/schema';

const rootTypeDefs = gql`
  type Mutation {
    _empty: Boolean!
  }

  type Query {
    _empty: Boolean!
  }
`;

const rootResolvers = {
  Mutation: {
    _empty: () => true,
  },
  Query: {
    _empty: () => true,
  },
};

const typeDefs = [rootTypeDefs, accountSchema, userSchema, extractSchema];
const resolvers = [
  rootResolvers,
  accountResolver,
  userResolver,
  extractResolver,
];

export { typeDefs, resolvers };
