'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/king.test.js', () => {
  it('king index', () => {
    return app.httpRequest().get('/my').expect(200)
      .expect('<h1>接天莲叶无穷碧，映日荷花别样红</h1>');
  });

  it('king getGirls', async () => {
    await app.httpRequest().get('getGirls').expect(200)
      .expect('<h1>杨幂，正在向你走来</h1>');
  });
});
