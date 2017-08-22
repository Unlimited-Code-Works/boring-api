import Router from 'koa-router';
import jwt from '../middleware/jwt';

const router = new Router({prefix: '/content'});
router.use(jwt.unless({ method: ['GET'] }));

router.get('/', async(ctx) => {
  ctx.body = {
    'result': 1,
  };
});

router.get('/test', async(ctx) => {
  ctx.body = {
    'jwt': 'pass',
  };
});

// export default router; // 这种外部在require时需要 .default来取到值
module.exports = router;
