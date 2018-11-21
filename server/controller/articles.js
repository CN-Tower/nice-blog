import Article from '../models/article';
import fn from 'funclib';

class ArticleController {

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

  async editArticle (req, res, next) {
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

  async getComments (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

  async getList (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

  async getTags (req, res, next) {
    try {
      const tags = await Article.find().distinct('tags');
      return res.status(200).json({status: 1, tags: tags.slice(0, 15)});
    } catch (err) {
      return next(err);
    }
  }

  async getHot (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

  async deleteArticle (req, res, next) {
    try {
      return res.status(200).json({status: 1, message: 'ok'});
    } catch (err) {
      return next(err);
    }
  }

};

export default new ArticleController();
