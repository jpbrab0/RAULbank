import { Extract } from '../../models/Extract';
import { ExtractRepository } from '../../repositories/ExtractRepository';
import { ExtractService } from '../../services/ExtractService';

const repository = new ExtractRepository(Extract);
const service = new ExtractService(repository);

export const extractResolver = {
  Query: {
    getExtract: (_, { accountId }) => service.get(accountId),
    getExtractById: (_, { itemId }) => service.getById(itemId),
  },
};
