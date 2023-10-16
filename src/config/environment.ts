import * as env from 'env-var';

module.exports = {
  DATABASE: env.get('DATABASE').required().asString()
};
