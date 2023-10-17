import { Request, Response } from 'express';
import { AdminService } from '../services/Admin.service';
import { AdminModel } from '../models/Admin/Admin';
import { jwtService } from '../middleware/jwtService';

export const AdminController = {
  create: async (req: Request, res: Response) => {
    const { userName, email, password } = req.body;
    try {
      const admin = await AdminService.create(userName, email, password);
      return res.status(201).json(admin);
    } catch (error) {
      console.error('Erro ao criar o admin: ', error);
      return res.status(500).json({ error: 'Não foi possível criar o admin.' });
    }
  },
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const admin = await AdminService.findByEmail(email);

      if (!admin) return res.status(404).json({ message: 'E-mail não registrado!' });

      const isPasswordValid = await admin.checkPassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'E-mail ou senha incorretos' });
      }

      const token = jwtService.signToken({ adminId: admin._id }, '1h');
      res.status(201).json({
        message: 'Login bem-sucedido!',
        token,
        userName: admin.userName,
        email: admin.email
      });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao autenticar administrador' });
    }
  }
};
