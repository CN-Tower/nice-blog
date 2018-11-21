import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author:  { type: Schema.Types.ObjectId, ref: 'User' },
  article: { type: Schema.Types.ObjectId, ref: 'Article', required: [true, "Can't be blank"], index: true },
  body:    { type: String, required: [true, "Can't be blank"], trim: true },
  likes:   [{ type: Schema.Types.ObjectId, ref: 'User' }],
  replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }]
}, {
  timestamps: true,
  collection: 'comments'
});

class CommentClass {
  toJSON() {
    return {
      id: this._id,
      body: this.body,
      createdAt: this.createdAt,
      author: this.author.toJSON(),
      replies: this.replies.map(reply => reply.toJSON())
    };
  }
}

CommentSchema.loadClass(CommentClass);

export default mongoose.model('Comment', CommentSchema);
