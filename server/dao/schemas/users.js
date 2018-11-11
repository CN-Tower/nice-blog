import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
	name: String,
	password: String,
	id: Number,
  create_time: String,
  phone_number: { type: String, default: '' },
  address: { type: String, default: '' },
  provider: { type: String, default: '' },

});

usersSchema.index({id: 1});

export default usersSchema;
