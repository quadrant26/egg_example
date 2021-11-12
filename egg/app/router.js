'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/kinger', controller.home.kinger);
  router.get('/my', controller.king.index);
  router.get('/getGirls', controller.king.getGirls);
  router.get('/getGirl2/:name', controller.king.getGirl2);
  router.get('/getGirlsQuery', controller.king.getGirlsQuery);

  router.post('/add', controller.king.add);
};
