'use strict';

const Controller = require('egg').Controller;

class KingController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>接天莲叶无穷碧，映日荷花别样红</h1>';
  }

  async getGirls() {
    const { ctx } = this;
    await new Promise( resolve => {
      setTimeout(()=>{
        resolve(ctx.body="<h1>杨幂，正在向你走来</h1>")
      },5000)
    })
  }
}

module.exports = KingController;
