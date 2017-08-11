import Router from 'koa-router';

const router = new Router({prefix: '/main'});

router.get('/', async(ctx) => {
  ctx.body = {
    'result': 1,
  };
});

export default router;
