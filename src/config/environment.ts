import * as env from 'env-var';

export const DATABASE = env.get('DATABASE').required().asString();
