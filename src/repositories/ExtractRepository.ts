type CreateTypes = {
  name: string;
  info: string;
  amount: number;
  accountId: string;
};

interface IExtractRepository {
  create(data: CreateTypes): Promise<any>;
  get(accountId: string): Promise<any>;
  getById(itemId: string): Promise<any>;
}

class ExtractRepository implements IExtractRepository {
  constructor(private ExtractModel: any) {
    this.ExtractModel = ExtractModel;
  }

  async create(data: CreateTypes): Promise<any> {
    const { name, info, amount, accountId } = data;

    const extract = await this.ExtractModel.create({
      name,
      info,
      amount,
      account: accountId,
    });

    return extract._id;
  }

  async get(accountId: string): Promise<any> {
    const data = await this.ExtractModel.find({ account: accountId })
      .populate('account')
      .exec();

    return data;
  }

  async getById(itemId: string): Promise<any> {
    const data = await this.ExtractModel.find({ _id: itemId })
      .populate('account')
      .exec();

    return data;
  }
}

export { IExtractRepository, ExtractRepository };
