const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema(
  {
    movie_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
      required: true,
    },
    member_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false }
);

const Subscription = mongoose.model('Subscription', subscriptionSchema, 'Subscriptions');
module.exports = Subscription;