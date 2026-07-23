import { env } from './env';

export const config = {

    baseURL: env.BASE_URL,

    timeout: 30000,

    headers: {

        'Content-Type': 'application/json',

        Accept: 'application/json'

    }

};