import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author:  { type: Schema.Types.ObjectId, ref: 'User' },
  article: { type: Schema.Types.ObjectId, ref: 'Article', required: [true, "Can't be blank"], index: true },
  body:    { type: String, required: [true, "Can't be blank"], trim: true },
  thumbUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  total:   { type: Number, default: 0 },
  replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }]
}, {
  timestamps: true,
  collection: 'comments'
});

class CommentClass {
  toJSONFor(user) {
    return {
      id: this._id,
      body: this.body,
      createdAt: this.createdAt,
      author: this.author.toProfileJSON(),
      replies: this.replies.toJSON()
    };
  }
}

CommentSchema.loadClass(CommentClass);

export default mongoose.model('Comment', CommentSchema);
