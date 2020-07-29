const mongoose = require('mongoose');
const config = require('../config/config');

const DB = config.DATABASE.replace(`<PASSWORD>`, config.PASSWORD);
const DB_LOCAL = config.URI;
mongoose
  .connect(DB_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

mongoose.connection.on('disconnected', () => {
  console.error(`Close MongoDb`);
});
