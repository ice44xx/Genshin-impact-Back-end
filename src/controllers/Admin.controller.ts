import { Request, Response } from 'express';
import { AdminService } from '../services/Admin.service';

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
  }
};
