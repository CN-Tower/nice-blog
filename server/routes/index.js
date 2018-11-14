import express from 'express';
import User from '../controller/user';
import Article from '../controller/article';
import Comment from '../controller/comment';

const router = express.Router();

router.post('/test', User.register);
// router.post('/test', (req, res, next) => {
//   res.send(200, {'msg': 'ok'});
// });

export default router;
