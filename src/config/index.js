import dotenv from 'dotenv';
import path from 'path';

// configure .env absolute path to make dotnev enable
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const {
  PORT,
} = process.env;

const defaults = {
  port: PORT,
};

// export default defaults;
module.exports = defaults;
