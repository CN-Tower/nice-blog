import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  owner:   { type: Schema.Types.ObjectId, ref: 'User' },
  article: { type: Schema.Types.ObjectId, ref: 'Article', required: [true, "Can't be blank"], index: true },
  total:   { type: Number, default: 0 },
  body:    { type: String, required: [true, "Can't be blank"], trim: true },
  replies: [
    {
      _id: Schema.Types.ObjectId,
      owner:   { type: Schema.Types.ObjectId, ref: 'User' },
      retlyTo: { type: Schema.Types.ObjectId, ref: 'User' },
      text: String,
      createAt: Date,
      updateAt: Date,
      thumbUserIds: { type: Array, default: [] },
    }
  ]
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
      author: this.author.toProfileJSONFor(user)
    };
  }
}

CommentSchema.loadClass(CommentClass);

export default mongoose.model('Comment', CommentSchema);
