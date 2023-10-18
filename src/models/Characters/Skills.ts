import mongoose from 'mongoose';

export const SkillsSchema = new mongoose.Schema({
  habilityOne: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    normal: [
      {
        name: {
          type: String
        },
        desc: {
          type: String
        }
      }
    ],
    loaded: [
      {
        name: {
          type: String
        },
        desc: {
          type: String
        }
      }
    ],
    imersive: [
      {
        name: {
          type: String
        },
        desc: {
          type: String
        }
      }
    ],
    newSkill: [
      {
        name: {
          type: String
        },
        desc: {
          type: String
        }
      }
    ],
    newSkillTwo: [
      {
        name: {
          type: String
        },
        desc: {
          type: String
        }
      }
    ]
  },
  habilityTwo: {
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    descTwo: [
      {
        name: {
          type: String
        },
        desc: {
          type: String
        }
      }
    ],
    image: {
      type: String
    }
  },
  habilityThird: {
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    descTwo: [
      {
        name: {
          type: String
        },
        desc: {
          type: String
        }
      }
    ],
    image: {
      type: String
    }
  }
});
