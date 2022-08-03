'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/add', controller.home.add);
  router.get('/user', controller.home.user);
  router.post('/api/user/register', controller.user.register);
};
