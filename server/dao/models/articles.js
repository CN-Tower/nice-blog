import mongoose from 'mongoose';
import articlesSchema from '../schemas/articles';

const Articles = mongoose.model('Articles', articlesSchema);

export default Articles;
