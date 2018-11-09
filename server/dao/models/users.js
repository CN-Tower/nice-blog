import mongoose from 'mongoose';
import usersSchema from '../schemas/users';


const Users = mongoose.model('Users', usersSchema);

export default Users;
