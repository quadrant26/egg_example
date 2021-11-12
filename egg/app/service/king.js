'use strict';

const Service = require('egg').Service;

class KingService extends Service {
    async getGirlsId (id) {
        return {
            id: id,
            name: '小红',
            age: 19
        }
    }
}

module.exports = KingService;