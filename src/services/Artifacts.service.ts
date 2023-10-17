import { ArtifactsModel, ArtifactsProps } from '../models/Artifacts/Artifacts';

export const ArtifactsService = {
  createArtifacts: async (attributes: ArtifactsProps) => {
    try {
      const create = await ArtifactsModel.create(attributes);
      return create;
    } catch (error) {
      console.error('Erro ao criar o artefato: ', error);
      throw new Error('Não foi possível criar o artefato.');
    }
  }
};
