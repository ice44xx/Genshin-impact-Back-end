import { NextFunction, Request, Response } from 'express';
import { AdminProps } from '../models/Admin/Admin';
import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../config/environment';

export interface AuthenticateRequest extends Request {
  user?: AdminProps | null;
}

export function authAdmin(req: AuthenticateRequest, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(401).json({ message: 'Não autorizado: nenhum TOKEN encontrado.' });
  if (!authorization.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Formato de TOKEN inválido.' });
  }
  const token = authorization.slice(7);
  try {
    const decoded = jwt.verify(token, JWT_KEY);
    req.user = decoded as AdminProps;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'TOKEN inválido ou expirado.' });
  }
}
