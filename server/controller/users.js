import User from '../models/user';
import fn from 'funclib';

class UserController {

  async register (req, res, next) {
    try {
      const user = new User();
      user.username = req.body.user.username;
      user.email = req.body.user.email;
      user.setPassword(req.body.user.password);
      await user.save();
      return res.json({ user: user.toAuthJSON() });
    } catch (err) {
      return next(err);
    }
  }

  async login (req, res, next) {
    fn.log(req.payload);
    try {
      if (!req.body.username || !req.body.password) {
        return res.status(422).json({
          status: 0,
          type: 'LOGIN_PARAMS_ERROR',
          message: '用户名或密码不能为空！'
        });
      }
      const user = await User.findOne({username: req.body.username});
      if (!user) {
        return res.status(422).json({
          status: 0,
          type: 'LOGIN_PARAMS_ERROR',
          message: '用户名或密码错误！'
        });
      }
      res.status(200).json({status: 1, token: user.generateJWT()})
    } catch (err) {
      return next(err);
    }
  }

  async action (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

  async setup (req, res, next) {
    try {
      const user = await User.findById(req.payload.id);
      if (!user) return res.sendStatus(401);
      // only update fields that were actually passed...
      if (typeof req.body.user.username !== 'undefined') {
        user.username = req.body.user.username;
      }
      if (typeof req.body.user.email !== 'undefined') {
        user.email = req.body.user.email;
      }
      if (typeof req.body.user.bio !== 'undefined') {
        user.bio = req.body.user.bio;
      }
      if (typeof req.body.user.image !== 'undefined') {
        user.image = req.body.user.image;
      }
      if (typeof req.body.user.password !== 'undefined') {
        user.setPassword(req.body.user.password);
      }
      await user.save();
      return res.json({ user: user.toAuthJSON() });
    } catch (err) {
      return next(err);
    }
  }

  async getProfile (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

  async getComments (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

  async getInfo (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

  async getFollowing (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

  async getFollowers (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

  async getList() {
    try {
      const user = await User.findById(req.payload.id);
      if (!user) return res.sendStatus(401);
      return res.json({ user: user.toAuthJSON() });
    } catch (err) {
      return next(err);
    }
  }

  async getActive (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

  async deleteUser (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

  async forbid (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }
};

export default new UserController();
