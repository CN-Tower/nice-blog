import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
	name: String,
	password: String,
	id: Number,
  create_time: String,
  phone_number: String,
  address: String,

})

usersSchema.index({id: 1});

export default usersSchema;
