const { Schema, model, mongoose } = require('mongoose');

const MessageSchema = new Schema({
  createAt: { type: Date, default: Date.now },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    require: true,
  },
  type: {
    type: String,
    enum: ['text', 'image'],
    default: 'text',
  },
  content: {
    type: String,
    default: '',
  },
});

module.exports = model('messages', MessageSchema);
