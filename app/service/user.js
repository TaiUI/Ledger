const Service = require('egg').Service;

class UserService extends Service {
  // 通过用户名获取用户信息
  async getUserByName(username) {
    const { app } = this;
    try {
      return await app.mysql.get('user', {username});
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // 注册
  async register(params) {
    const { app } = this;
    try {
      return await app.mysql.insert('user', params);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = UserService;
