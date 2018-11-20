import mongoose from 'mongoose';
import config from 'config-lite';
import fn from 'funclib';

mongoose.connect(config.dbUrl, { useMongoClient: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open', () => {
  fn.log('Connect MongoDB success!', { title: 'Msg from MongoDB', color: 'green' });
});

db.on('error', function (error) {
  fn.log('Error in MongoDB connection: ' + error, { title: 'Msg from MongoDB', color: 'red' });
  mongoose.disconnect();
});

db.on('close', function () {
  fn.log('MongoDB was Disconnected, now is reconnecting...', { title: 'Msg from MongoDB', color: 'red' });
  mongoose.connect(config.url, { server: { auto_reconnect: true } });
});
