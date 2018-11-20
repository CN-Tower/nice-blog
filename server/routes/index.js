import express from 'express';
import validate from '../middlewares/validate';
import auth from '../controller/auth'
import user from '../controller/user'
// import article from '../controller/article'
// import comment from '../controller/comment'

const router = express.Router();

router.use(validate);

// 用户相关接口
router.post('/user', user.register);
router.post('/user/login', user.login);
router.put('/user', auth.required, user.updateUser);
router.get('/user', auth.required, user.getUserAuthInfo);
// router.get('/users', auth.required, user.getUserAuthInfo);

// router.post('/article', User.create);
// router.put('/article', auth.required, user.updateUser);
// router.get('/articles', auth.required, user.getUserAuthInfo);
// router.get('/article/:id', auth.optional, user.getUserAuthInfo);

// router.post('/comment', comment.create);
// router.put('/comment', auth.required, comment.updateUser);
// router.get('/comment', auth.required, comment.getUserAuthInfo);
// router.get('/comment', auth.required, comment.getUserAuthInfo);

export default router;
