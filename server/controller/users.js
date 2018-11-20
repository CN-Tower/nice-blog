import User from '../models/user';
import fn from 'funclib';

class UserController {

  async register (req, res, next) {
    try {
      var user = new User();
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
    if (!req.body.user.email) {
      return res.status(422).json({ errors: { email: "can't be blank" } });
    }
    if (!req.body.user.password) {
      return res.status(422).json({ errors: { password: "can't be blank" } });
    }
    passport.authenticate('local', { session: false }, function (err, user, info) {
      if (err) return next(err);
      if (user) {
        user.token = user.generateJWT();
        return res.json({ user: user.toAuthJSON() });
      } else {
        return res.status(422).json(info);
      }
    })(req, res, next);
  }

  async getUserAuthInfo (req, res, next) {
    try {
      const user = await User.findById(req.payload.id);
      if (!user) return res.sendStatus(401);
      return res.json({ user: user.toAuthJSON() });
    } catch (err) {
      return next(err);
    }
  }

  async updateUser (req, res, next) {
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
};

export default new UserController();
