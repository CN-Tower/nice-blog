import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  id: String,
  name: String,
  password: String,
  userType: Number, 
  avater: String,
  email: String,
  phoneNumber: String,
  address: String,
  company: String,
  webset: String,
  bio: String,
  webset: String,
  articleIds: {type: Array, default: []},
  collections: {type: Array, default: []},
  followers: {type: Array, default: []},
  following: {type: Array, default: []},
  activity: {type: Number, default: 0},
  commentIds: {type: Array, default: []},
  replyIds: {type: Array, default: []},
  messageIds: {type: Array, default: []},
  registTime: String
});

export default usersSchema;
