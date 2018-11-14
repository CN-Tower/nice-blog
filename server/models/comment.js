import mongoose from 'mongoose';

const Schema = mongoose.Schema;

class CommentSchema extends Schema {
  constructor() {
    super({
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
    }, { timestamps: true });

    this.methods = fn.extend({}, this, []);
    this.statics = fn.extend({}, this, []);
  }


}

const commentSchema = new CommentSchema();

export default mongoose.model('Comment', commentSchema);
