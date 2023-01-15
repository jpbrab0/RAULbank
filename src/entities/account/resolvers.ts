import { Account } from '../../models/Account';
import { Extract } from '../../models/Extract';
import { AccountRepository } from '../../repositories/AccountRepository';
import { ExtractRepository } from '../../repositories/ExtractRepository';
import { AccountService } from '../../services/AccountService';
import { ExtractService } from '../../services/ExtractService';

const extractRepo = new ExtractRepository(Extract);
const extractService = new ExtractService(extractRepo);

const accountRepo = new AccountRepository(Account);
const service = new AccountService(accountRepo, extractService);

export const accountResolver = {
  Mutation: {
    createAccount: (_, { userId }) => service.create(userId),
    deposit: (_, { _id, amount }) => service.deposit(_id, amount),
    withdraw: (_, { _id, amount }) => service.withdraw(_id, amount),
    transaction: (_, { data }) => service.transaction(data),
  },
  Query: {
    getAccount: (_, { _id }) => service.get(_id),
    getBalance: (_, { _id }) => service.balance(_id),
  },
};
