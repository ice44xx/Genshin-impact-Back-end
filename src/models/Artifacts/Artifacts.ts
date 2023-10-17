import mongoose from 'mongoose';

export interface ArtifactsProps {
  name: String;
  desc: String;
  attributes: string[];
  image: string[];
}

const ArtifactsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  attributes: [
    {
      partone: {
        type: String
      },
      parttwo: {
        type: String
      }
    }
  ],
  image: [
    {
      rose: {
        type: String
      },
      feather: {
        type: String
      },
      sand: {
        type: String
      },
      goblet: {
        type: String
      },
      mask: {
        type: String
      }
    }
  ]
});

export const ArtifactsModel = mongoose.model('Artifacts', ArtifactsSchema);
