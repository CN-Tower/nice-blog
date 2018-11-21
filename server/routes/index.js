import express   from 'express';
import validate  from '../middlewares/validate';
import adminAuth from '../middlewares/adminAuth';
import auth      from '../settings/auth'
import user      from '../controller/user'
import article   from '../controller/article'
import comment   from '../controller/comment'

const router = express.Router();

router.use('*', validate);
router.use('/admin', adminAuth);

// 用户相关
router.post  ('/user/register',        auth.optional, user.register         );
router.post  ('/user/login',           auth.optional, user.login            );
router.post  ('/user/action',          auth.optional, user.action           );
router.put   ('/user/setup',           auth.required, user.setup            );
router.get   ('/user/profile',         auth.required, user.getProfile       );
router.get   ('/user/comments',        auth.required, user.getComments      );
router.get   ('/user/:id/info',        auth.optional, user.getInfo          );
router.get   ('/user/:id/following',   auth.optional, user.getFollowing     );
router.get   ('/user/:id/followers',   auth.optional, user.getFollowers     );
router.get   ('/user/list',            auth.optional, user.getList          );
router.get   ('/user/active',          auth.optional, user.getActive        );

// 文章相关
router.post  ('/article/create',       auth.required, article.create        );
router.post  ('/article/:id/action',   auth.required, article.action        );
router.put   ('/article/:id/edit',     auth.required, article.editArticle   );
router.get   ('/article/:id/info',     auth.optional, article.getInfo       );
router.get   ('/article/:id/comments', auth.optional, article.getComments   );
router.get   ('/article/list',         auth.optional, article.getList       );
router.get   ('/article/tags',         auth.optional, article.getTags       );
router.get   ('/article/hot',          auth.optional, article.getHot        );
router.delete('/article/:id',          auth.required, article.deleteArticle );

// 评论相关
router.post  ('/comment/create',       auth.required, comment.create        );
router.post  ('/comment/action',       auth.required, comment.action        );
router.put   ('/comment/:id/edit',     auth.required, comment.editComment   );
router.get   ('/comment/:id/info',     auth.optional, comment.getInfo       );
router.delete('/comment/:id',          auth.required, comment.deleteComment );

// 管理相关
router.post  ('/admin/user/:id/forbid',   auth.required, user.forbid           );
router.put   ('/admin/user/:id/setup',    auth.required, user.setup            );
router.get   ('/admin/user/:id/profile',  auth.required, user.getProfile       );
router.get   ('/admin/user/:id/comments', auth.required, user.getComments      );
router.delete('/admin/user/:id',          auth.required, user.deleteUser       );
router.put   ('/admin/article/:id/edit',  auth.required, article.editArticle   );
router.get   ('/admin/article/:id/info',  auth.optional, article.getInfo       );
router.get   ('/admin/article/:id/comments', auth.optional, article.getComments   );
router.get   ('/admin/article/list',      auth.required, article.getList       );
router.delete('/admin/article/:id',       auth.required, article.deleteArticle );
router.delete('/admin/comment/:id',       auth.required, comment.deleteComment );

export default router;
