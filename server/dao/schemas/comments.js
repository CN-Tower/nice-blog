import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
	user_name: String,
	password: String,
	id: Number,
	create_time: String
})

commentsSchema.index({id: 1});

export default commentsSchema;
