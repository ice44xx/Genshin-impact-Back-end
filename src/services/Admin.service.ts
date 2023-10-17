import { AdminModel } from '../models/Admin/Admin';

export const AdminService = {
  create: async (userName: string, email: string, password: string) => {
    try {
      const findEmail = await AdminModel.findOne({ email });
      if (findEmail) {
        throw new Error('Já existe um administrador com este e-mail.');
      }

      const newAdmin = new AdminModel({
        userName,
        email,
        password
      });

      const admin = await newAdmin.save();
      return admin;
    } catch (error) {
      console.log('Erro ao criar administrador: ', error);
    }
  },
  findByEmail: async (email: string) => {
    try {
      const admin = AdminModel.findOne({ email });
      if (!admin) {
        console.log('Email não encontrado');
        return null;
      }
      return admin;
    } catch (error) {
      throw error;
    }
  }
};
module.exports = AdminService;
