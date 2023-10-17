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
  },
  findAll: async () => {
    try {
      const find = await ArtifactsModel.find();
      return find;
    } catch (error) {
      console.error('Erro ao encontrar todos os artefatos: ', error);
      throw new Error('Não foi possível encontrar todos os artefatos.');
    }
  }
};
