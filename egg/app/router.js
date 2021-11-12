'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/kinger', controller.home.kinger);
  router.get('/my', controller.king.index);
};
