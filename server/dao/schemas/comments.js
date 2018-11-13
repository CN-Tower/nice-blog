import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  id: String,
  articleId: String,
  total: {type: Number, default: 0},
	container: [
    {
      id: String,
      owner: String,
      ownerId: String,
      text: String,
      createTime: String,
      thumbUserIds: {type: Array, default: []},
      replies: [
        {
          id: String,
          owner: String,
          ownerId: String,
          retlyToUser: String,
          text: String,
          createTime: String,
          thumbUserIds: {type: Array, default: []},
        }
      ]
    }
  ]
});

export default commentsSchema;
