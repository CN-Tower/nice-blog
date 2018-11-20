import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  author:     { type: Schema.Types.ObjectId, ref: 'User' },
  replyTo:    { type: Schema.Types.ObjectId, ref: 'User' },
  body:       { type: String, required: [true, "Can't be blank"], trim: true },
  thumbUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }]
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
      author: this.author.toProfileJSON(),
      replyTo: this.replyTo.toProfileJSON()
    };
  }
}

ReplySchema.loadClass(ReplyClass);

export default mongoose.model('Comment', ReplySchema);
