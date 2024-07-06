const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Member = mongoose.model('Member', memberSchema, 'Members');
module.exports = Member;