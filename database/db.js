const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('connected', () => {
  console.log('database is connected');
});

db.on('disconnected', () => {
  console.log('database is disconnected');
});
db.on('error', () => {
  console.log('database is connection error');
});
