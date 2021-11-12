'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hello, World!';
  }

  async kinger() {
    const { ctx } = this;
    ctx.body = '<h1>我观青山多妩媚，料青山，观我应如是！</h1>';
  }
}

module.exports = HomeController;
