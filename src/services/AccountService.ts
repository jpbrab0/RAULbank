import { IAccountRepository } from '../repositories/AccountRepository';
import { IExtractService } from './ExtractService';

type TransactionTypes = {
  sender: string;
  receiver: string;
  amount: number;
};

interface IAccountService {
  create(userId: string): Promise<boolean>;
  get(_id: string): Promise<any>;
  balance(_id: string): Promise<any>;
  deposit(_id: string, amount: number): Promise<boolean>;
  withdraw(_id: string, amount: number): Promise<boolean>;
  transaction({ sender, receiver, amount }: TransactionTypes);
}

class AccountService implements IAccountService {
  constructor(
    private repository: IAccountRepository,
    private extractService: IExtractService
  ) {
    this.repository = repository;
    this.extractService = extractService;
  }

  async create(userId: string): Promise<any> {
    try {
      const account = this.repository.create(userId);
      console.log(`Account Created: ID - ${account}`);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async get(_id: string): Promise<any> {
    try {
      const data = await this.repository.get(_id);
      const { balance, user } = data[0];

      return {
        balance,
        user,
      };
    } catch (e) {
      console.log(e);
      return {
        balance: null,
        user: null,
      };
    }
  }

  async balance(_id: string): Promise<any> {
    try {
      const data = await this.repository.get(_id);
      const { balance } = data[0];

      return balance;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deposit(_id: string, amount: number): Promise<boolean> {
    try {
      const account = await this.repository.get(_id);
      const { balance } = account[0];
      const newBalance = balance + amount;

      await this.repository.setBalance(_id, newBalance);

      await this.extractService.add({
        accountId: _id,
        info: `Was deposited ${amount}`,
        name: 'DEPOSIT',
        amount,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async withdraw(_id: string, amount: number): Promise<boolean> {
    try {
      const account = await this.repository.get(_id);
      const { balance } = account[0];

      if (balance < amount) {
        return false;
      }

      const newBalance = balance - amount;
      await this.repository.setBalance(_id, newBalance);

      await this.extractService.add({
        accountId: _id,
        info: `Was withdrawn ${amount}`,
        name: 'WITHDRAW',
        amount,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async transaction({ sender, receiver, amount }: TransactionTypes) {
    try {
      const senderAccount = await this.repository.get(sender);
      const { balance: senderBalance, user: senderData } = senderAccount[0];

      const receiverAccount = await this.repository.get(receiver);
      const { balance: receiverBalance, user: receiverData } =
        receiverAccount[0];

      if (amount > senderBalance) {
        return false;
      }

      const newSenderBalance = senderBalance - amount;
      await this.repository.setBalance(sender, newSenderBalance);

      const newReceiverBalance = receiverBalance + amount;
      await this.repository.setBalance(receiver, newReceiverBalance);

      await this.extractService.add({
        accountId: sender,
        info: `Sent ${amount} to ${receiverData.username}`,
        name: 'TRANSACTION',
        amount,
      });

      await this.extractService.add({
        accountId: receiver,
        info: `${senderData.username} sent ${amount}`,
        name: 'TRANSACTION',
        amount,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
export { AccountService };
