import mongoose from 'mongoose';
import adminSchema from '../schemas/admin';

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
