'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret); // 传入加密字符串
  router.get('/', controller.home.index);
  router.post('/add', controller.home.add);
  router.get('/user', controller.home.user);
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);
  router.get('/api/user/test', _jwt, controller.user.test); // 放入第二个参数，作为中间件过滤项
  router.get('/api/user/getUserByName', _jwt, controller.user.getUserInfo);
  router.post('/api/user/editUserInfo', _jwt, controller.user.updateUserInfo);
  router.post('/api/bill/add', _jwt, controller.bill.add); // 添加账单
};
