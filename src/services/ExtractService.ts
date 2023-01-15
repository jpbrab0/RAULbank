import { IExtractRepository } from '../repositories/ExtractRepository';

type CreateTypes = {
  name: string;
  info: string;
  amount: number;
  accountId: string;
};

export interface IExtractService {
  add(data: CreateTypes): Promise<boolean>;
  get(accountId: string): Promise<any>;
  getById(itemId: string): Promise<any>;
}

export class ExtractService implements IExtractService {
  constructor(private repository: IExtractRepository) {
    this.repository = repository;
  }

  async add(data: CreateTypes): Promise<boolean> {
    try {
      await this.repository.create(data);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async get(accountId: string): Promise<any> {
    try {
      const extract = await this.repository.get(accountId);
      console.log(extract[0]);
      return extract[0];
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async getById(itemId: string): Promise<any> {
    try {
      const extractItem = await this.repository.getById(itemId);

      return extractItem[0];
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}
