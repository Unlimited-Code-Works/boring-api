import Koa from 'koa';
import path from 'path';
import fs from 'fs';

const app = new Koa();

// find all api under src/api/
const apiDir = path.resolve(__dirname, './api');
const apiFiles = fs.readdirSync(apiDir);

apiFiles.forEach((file) => {
  const module = require(`${apiDir}/${file}`);
  app.use(module.routes());
});

export default app;
