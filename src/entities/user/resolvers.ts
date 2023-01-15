import { User } from '../../models/User';
import { UserRepository } from '../../repositories/UserRepository';
import { UserService } from '../../services/UserService';

const userRepo = new UserRepository(User);
const service = new UserService(userRepo);
export const userResolver = {
  Mutation: {
    createUser: (_, { data }) => service.create(data),
  },
  Query: {
    getUser: (_, { userId }) => service.get(userId),
  },
};
