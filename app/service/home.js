'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async user() {
    // // 假设从数据库获取的用户信息
    // return {
    //   name: '嘎子',
    //   slogen: '网络的世界太虚拟,你把握不住',
    // };
    const { ctx, app } = this;
    const QUERY_STR = 'id, name';
    const sql = `select ${QUERY_STR} from list`;
    try {
      const result = await app.mysql.query(sql);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = HomeService;
