import Router from 'koa-router';
import jwt from '../middleware/jwt';

const router = new Router({prefix: '/main'});
router.use(jwt.unless({ path: ['/main/test'] }));

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
