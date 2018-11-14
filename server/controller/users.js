import UserModel from '../models/user';
import fn from 'funclib';

class User {
  constructor() {
    this.a = 'aaa';
    // this.register = this.register.bind(this);
  }
  async register(req, res, next) {
    fn.log(this);
    const user = await UserModel.find({name: 'test'});
    fn.log(user, 'user');
    fn.log('do test');
    try {
      await UserModel.create({
        name: 'test',
        email: 'text@zte.com.cn',
        password: '123456'
      });
      res.send(200, {'msg': 'ok'});
    } catch (e) {
      fn.log(e, 'e');
      res.send(200, {'msg': 'ok'});
    }
  }
}

export default new User();
