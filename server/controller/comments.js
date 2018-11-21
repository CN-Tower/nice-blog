import Comment from '../models/comment';
import Reply from '../models/reply';
import fn from 'funclib';

class CommentController {

  async create (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
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

  async editComment (req, res, next) {
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

  async deleteComment (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

};

export default new CommentController();
