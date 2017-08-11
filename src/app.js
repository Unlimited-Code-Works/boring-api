import Koa from 'koa';
import main from './api/main';

const app = new Koa();

app.use(main.routes());

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
