import mongoose from 'mongoose';
import config from 'config-lite';
import fn from 'funclib';

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('connected', function() {
  fn.log('Connect to MongoDB success!', { title: 'MongoDB', color: 'green' });
});

db.on('error', err => {
  fn.log(`Connect to MongoDB failed: ${err}`, { title: 'MongoDB', color: 'red' });
  mongoose.disconnect();
});

db.on('disconnected', () => {
  fn.log('Reconnecting to MongoDB...', { title: 'MongoDB', color: 'green' });
  fn.timeout(() => mongoose.connect(config.dbUrl, { useNewUrlParser: true }), 5000);
});

mongoose.connect(config.dbUrl, { useNewUrlParser: true }); 
