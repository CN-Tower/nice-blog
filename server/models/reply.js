import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  author:  { type: Schema.Types.ObjectId, ref: 'User'    },
  replyTo: { type: Schema.Types.ObjectId, ref: 'User'    },
  body:    { type: String, required: [true, "Can't be blank"], trim: true },
  likes:   [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comment: { type: Schema.Types.ObjectId, ref: 'Comment' },
}, {
  timestamps: true,
  collection: 'replies'
});

class ReplyClass {
  toJSON() {
    return {
      id: this._id,
      body: this.body,
      createdAt: this.createdAt,
      author: this.author.toJSON(),
      replyTo: this.replyTo.toJSON()
    };
  }
}

ReplySchema.loadClass(ReplyClass);

export default mongoose.model('Reply', ReplySchema);
