import * as env from 'env-var';

export const DATABASE = env.get('DATABASE').required().asString();
export const JWT_KEY = env.get('JWT_KEY').required().asString();
