// import { Account } from 'models/Account';

interface IAccountRepository {
  create(userId: string): Promise<any>;
  get(_id: string): Promise<any>;
  setBalance(_id: string, newBalance: number): Promise<boolean>;
}

class AccountRepository implements IAccountRepository {
  constructor(private AccountModel: any) {
    this.AccountModel = AccountModel;
  }

  async create(userId: string): Promise<any> {
    const account = await this.AccountModel.create({
      user: userId,
    });

    return account._id;
  }

  async get(_id: string): Promise<any> {
    const data = await this.AccountModel.find({ _id }).populate('user').exec();

    return data;
  }

  async setBalance(_id: string, newBalance: number): Promise<boolean> {
    await this.AccountModel.findOneAndUpdate({ _id }, { balance: newBalance });

    return true;
  }
}

export { IAccountRepository, AccountRepository };
