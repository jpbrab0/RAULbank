type CreateTypes = {
  username: string;
  email: string;
  password: string;
  documentType: 'CPF' | 'CNPJ';
  document: string;
};

interface IUserRepository {
  create(data: CreateTypes): Promise<any>;
  get(userId: string): Promise<any>;
}

class UserRepository implements IUserRepository {
  constructor(private UserModel: any) {
    this.UserModel = UserModel;
  }

  async create(data: CreateTypes): Promise<any> {
    const { username, email, password, documentType, document } = data;

    const user = await this.UserModel.create({
      username,
      email,
      password,
      documentType,
      document,
    });

    return user._id;
  }

  async get(userId: string): Promise<any> {
    const data = await this.UserModel.find({ _id: userId }).exec();

    return data;
  }
}

export { IUserRepository, UserRepository };
