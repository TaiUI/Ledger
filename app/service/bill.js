'use strict';

const Service = require('egg').Service;

class BillService extends Service {
  async add(params) {
    const { ctx, app } = this;
    try {
      // 往 bill 表中，插入一条账单数据
      return await app.mysql.insert('bill', params);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = BillService;
