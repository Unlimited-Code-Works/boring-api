import dotenv from 'dotenv';
import path from 'path';

// configure .env absolute path to make dotnev enable
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const {
  PORT,
  DB_URL,
} = process.env;

const defaults = {
  port: PORT,
  jwt: {
    secret: 'boring',
    options: {
      expiresIn: '30 days',
    },
    signUrl: ['/main/signIn', '/main/signUp'],
  },
  db: {
    url: DB_URL,
    options: {
      // http://mongodb.github.io/node-mongodb-native/2.1/api/Server.html
      poolSize: 5, // 5 as default
      socketOptions: {
        connectTimeoutMS: 9000,
      },
    },
  },
};

// export default defaults;
module.exports = defaults;
