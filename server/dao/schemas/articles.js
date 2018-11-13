import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  id: String,
  uuid: String,
  title: String,
  description: {type: String, default: ''},
  tabs: {type: Array, default: []},
  owner: String,
  ownerId: String,
  author: {type: String, default: ''},
  authorId: {type: String, default: ''},
  isRetweet: {type: Boolean, default: false},
  thumbNumber: {type: Number, default: 0},
  thumbUserIds: {type: Array, default: []},
  collectedNumber: {type: Number, default: 0},
  collectedUserIds: {type: Array, default: []},
  commentNumber: {type: Number, default: 0},
  commentId: {type: String, default: ''},
  createTime: String,
  text: String
});

export default articlesSchema;
