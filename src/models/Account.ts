import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
  balance: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  extract: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Extract',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Account = mongoose.model('Account', AccountSchema);

export { Account };
