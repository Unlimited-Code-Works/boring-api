import jwt from 'koa-jwt';
import { jwt as jwtConf } from '../config';

const { secret } = jwtConf;

// export default () => {
//   return jwt({ secret });
// };
export default jwt(secret);
