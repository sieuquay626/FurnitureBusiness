const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const hostname = '127.0.0.1';
const connect = require('./db/connection');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const volleyball = require('volleyball');
const helmet = require('helmet');
const middleware = require('./middleware/index');
const UserRoutes = require('./routes/api/user');
const ProductRoutes = require('./routes/api/product');
const SupplierRoutes = require('./routes/api/supplier');
const CategoryRoutes = require('./routes/api/category');
const CommentRoutes = require('./routes/api/comment');
const RatignRoutes = require('./routes/api/rating');
const server = http.createServer(app);
const io = socketio(server);

//setting
app.set('port', process.env.PORT || 3000);

//middleware
app.use('/', express.static('public/images'));
app.use(passport.initialize());
require('./config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(volleyball);
app.use(cors());
app.use(helmet());
app.use('/api/v1/auth', UserRoutes);
app.use('/api/v1/product', ProductRoutes);
app.use('/api/v1/supplier', SupplierRoutes);
app.use('/api/v1/category', CategoryRoutes);
app.use('/api/v1/comment', CommentRoutes);
app.use('/api/v1/rating', RatignRoutes);
// routes

app.get('/', (req, res) => {
  res.json({
    message: 'Hello,😂😂😂😂',
  });
});

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(app.get('port'), hostname, () => {
  console.log(`Sever is running at http://${hostname}:${app.get('port')}`);
});

// const connections = [];

io.on('connection', (socket) => {
  console.log('New user connected ' + socket.id);
  // connections.push(socket);
  // socket.on('disconnect', () => {
  //   console.log('Disconnected - ' + socket.id);
  // });
});
