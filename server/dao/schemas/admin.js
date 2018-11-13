import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const adminSchema = new Schema({
  id: String,
  name: String,
  password: String,
  createTime: String,
  adminType: {type: Number, default: 0},
});

export default adminSchema;
