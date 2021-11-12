'use strict';

const { app } = require('egg-mock/bootstrap');

describe('king yest', () => {
  it('king index', () => {
    return app.httpRequest().get('/my').expect(200)
      .expect('<h1>接天莲叶无穷碧，映日荷花别样红</h1>');
  });
});
