import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const adminSchema = new Schema({
	name: String,
	password: String,
	id: Number,
  create_time: String,
  admin_type: String
});
adminSchema.index({id: 1});

export default adminSchema;
