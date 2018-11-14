import mongoose from 'mongoose';

const Schema = mongoose.Schema;

class ArticleSchema extends Schema {
  constructor() {
    super({
      title:        { type: String, required: [true, "can't be blank"] },
      tabs:         { type: Array, default: [] },
      description:  { type: String, default: '' },
      body:         { type: String, required: [true, "can't be blank"] },
      owner:        { type: Schema.Types.ObjectId, ref: 'User', required: [true, "Can't be blank"], index: true },
      author:       { type: Schema.Types.ObjectId, ref: 'User' },
      stars:        [{ type: Schema.Types.ObjectId, ref: 'User' }],
      favorites:    [{ type: Schema.Types.ObjectId, ref: 'User' }],
      images:       { type: Array, default: [] },
      isRetweet:    { type: Boolean, default: false },
      collectedUserIds: { type: Array, default: [] },
      commentId:    { type: String, default: '' }
    }, { timestamps: true });

    this.methods = fn.extend({}, this, []);
    this.statics = fn.extend({}, this, []);
  }
  
  
}



const articleSchema = new ArticleSchema();

export default mongoose.model('Article', articleSchema);

