require('dotenv').config();
import mongoose from 'mongoose';
import { AdminModel } from '../models/Admin/Admin';
import { DATABASE } from '../config/environment';

const seedAdmin = async () => {
  try {
    await mongoose.connect(DATABASE);

    const newAdminData = {
      userName: 'admin4',
      email: 'admin4@gmail.com',
      password: '123456'
    };

    const existingAdmin = await AdminModel.findOne({ email: newAdminData.email });

    if (existingAdmin) {
      console.log('Já existe um administrador com este e-mail.');
    } else {
      const newAdmin = new AdminModel(newAdminData);
      await newAdmin.save();

      console.log('Admin criado com sucesso.');
    }
  } catch (error) {
    console.error('Erro ao criar administrador:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedAdmin();
