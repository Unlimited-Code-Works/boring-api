import Router from 'koa-router';

const router = new Router({prefix: '/main'});

router.get('/', async(ctx) => {
  ctx.body = {
    'result': 1,
  };
});

// export default router; // 这种外部在require时需要 .default来取到值
module.exports = router;
