import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface AdminProps {
  userName: string;
  email: string;
  password: string;
}

const AdminSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

AdminSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPass = await bcrypt.hash(this.password, salt);
    this.password = hashedPass;
    return next();
  } catch (error: any) {
    return next(error);
  }
});

export const AdminModel = mongoose.model('Admin', AdminSchema);
