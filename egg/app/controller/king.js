'use strict';

const Controller = require('egg').Controller;

class KingController extends Controller {
    async index (){
        const { ctx } = this;
        ctx.body = "<h1>接天莲叶无穷碧，映日荷花别样红</h1>"
    }
}

module.exports = KingController;