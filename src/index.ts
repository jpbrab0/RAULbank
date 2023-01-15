import "dotenv/config"
import { ApolloServer } from 'apollo-server';

import connectMongo from './config/mongoose';
import { resolvers, typeDefs } from './entities/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(async ({ url }) => {
  await connectMongo();
  return console.log(`Server está on! ${url}`);
});

