import { Request, Response } from 'express';
import { ArtifactsService } from '../services/Artifacts.service';

export const ArtifactsController = {
  create: async (req: Request, res: Response) => {
    const {} = req.body;
    try {
      const artifact = ArtifactsService.createArtifacts(req.body);
      return res.status(201).json(artifact);
    } catch (error) {
      console.error('Erro ao criar o artefato: ', error);
      return res.status(500).json({ error: 'Não foi possível criar o artefato.' });
    }
  }
};
