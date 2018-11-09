import mongoose from 'mongoose';
import commentsSchema from '../schemas/comments';

const Comments = mongoose.model('Comments', commentsSchema);


export default Comments;
