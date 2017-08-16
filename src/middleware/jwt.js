import jwt from 'jsonwebtoken';
import { jwt as jwtConf } from '../config/index';
import { INTERNAL_SERVER_ERROR } from 'http-status';

// grant jwt token (only: signIn or signUp)
export default async(ctx, next) => {
  try {
    await next();

    const { secret, options, signUrl } = jwtConf;
    if (signUrl.includes(ctx.url)) {
      const token = jwt.sign({ userId: ctx.body.id }, secret, options);
      ctx.set('Authorization', token);
    }
  } catch (e) {
    console.error(e);
    ctx.body = {
      message: e.message,
    };
    ctx.status = e.status || INTERNAL_SERVER_ERROR;
  }
};
