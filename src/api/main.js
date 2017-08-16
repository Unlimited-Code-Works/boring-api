import Router from 'koa-router';

const router = new Router({prefix: '/main'});

router.get('/', async(ctx) => {
  ctx.body = {
    'result': 1,
  };
});

router.post('/signUp', async(ctx) => {
  ctx.body = {
    id: 'id',
  };
});

router.post('/signIn', async(ctx) => {
  ctx.body = {
    id: 'id',
  };
});

// export default router; // 这种外部在require时需要 .default来取到值
module.exports = router;
