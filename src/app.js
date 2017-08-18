import Koa from 'koa';
import path from 'path';
import fs from 'fs';
import jwt from './middleware/jwt';
import jwtDecoder from './middleware/jwt-decoder';

const app = new Koa();
app
  .use(jwt)
  .use(jwtDecoder);

// find all api under src/api/
const apiDir = path.resolve(__dirname, './api');
const apiFiles = fs.readdirSync(apiDir);

apiFiles.forEach((file) => {
  const module = require(`${apiDir}/${file}`);
  app.use(module.routes());
});

export default app;
