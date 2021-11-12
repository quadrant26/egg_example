'use strict';

const Controller = require('egg').Controller;

class KingController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = '<h1>接天莲叶无穷碧，映日荷花别样红</h1>';
    await ctx.render('king.html', {
      id: 1204,
      name: 'Blue',
      age: 18,
      skill: '按摩',
      skills:[
        '泰式按摩',
        '精油搓背',
        '水疗SPA'
      ]
    })
  }

  async getGirls() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>杨幂，正在向你走来</h1>');
      }, 5000);
    });
  }

  async getGirlsQuery() {
    const { ctx } = this;
    // ctx.body = ctx.query;
    const res = await ctx.service.king.getGirlsId('123');
    ctx.body = res;
  }

  async getGirl2(){
    const {ctx} = this;
    // ctx.body = ctx.params.name
    const res = await ctx.service.king.getGirlsId('123');
    ctx.body = res;
  }

  async add() {
    const { ctx } = this;
    ctx.body={
      status: 200,
      data: ctx.request.body
    }
  }
}

module.exports = KingController;
