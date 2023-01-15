import mongoose from 'mongoose';

const ExtractSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  info: {
    type: String,
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Extract = mongoose.model('Extract', ExtractSchema);

export { Extract };
