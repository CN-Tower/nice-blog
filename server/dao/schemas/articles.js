import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const articlesSchema = new Schema({
	author: String,
	title: String,
  id: Number,
  uuid: String,
	create_time: String,
})

articlesSchema.index({id: 1});

export default articlesSchema;
