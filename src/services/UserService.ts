import { IUserRepository } from '../repositories/UserRepository';

type CreateTypes = {
  username: string;
  email: string;
  password: string;
  documentType: 'CPF' | 'CNPJ';
  document: string;
};

interface IUserService {
  create(data: CreateTypes): Promise<boolean>;
  get(userId: string): Promise<any>;
}

class UserService implements IUserService {
  constructor(private repository: IUserRepository) {
    this.repository = repository;
  }

  async create(data: CreateTypes): Promise<boolean> {
    try {
      const user = await this.repository.create(data);
      console.log(`User created: ID - ${user}`);

      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async get(userId: string): Promise<any> {
    try {
      const user = await this.repository.get(userId);
      console.log(user[0]);
      return user[0];
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}

export { UserService };
