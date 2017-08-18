import jwt from 'jsonwebtoken';
import { jwt as jwtConf } from '../config/index';
import { UNAUTHORIZED } from 'http-status';

// grant jwt token (only: signIn or signUp)
export default async(ctx, next) => {
  try {
    await next();
    const token = ctx.get('Authorization');
    if (token) {
      const { secret, options } = jwtConf;
      const data = jwt.verify(token, secret, options);
      if (!data.id) {
        ctx.throw(UNAUTHORIZED, 'Bad Authorization or expired');
      } else {
        ctx.state.user = data;
      }
    }
  } catch (e) {
    console.error(e);
    ctx.body = {
      message: e.message,
    };
    ctx.status = e.status || UNAUTHORIZED;
  }
};
