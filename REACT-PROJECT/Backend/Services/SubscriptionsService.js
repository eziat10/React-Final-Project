const Subscription = require("../Models/SubscriptionsModel");

// Get All with POPULATION
const getAllSubscriptions = (filters = {}) => {
  return Subscription.find(filters).populate('movie_id').populate('member_id');
};

// Get Subscription POPULATION
const getSubscriptionById = (id) => {
  return Subscription.findById(id).populate('movie_id').populate('member_id');
};


const addSubscription = (subscriptionData) => {
  const newSubscription = new Subscription(subscriptionData);
  return newSubscription.save();
};

const updateSubscription = (id, subscriptionData) => {
  return Subscription.findByIdAndUpdate(id, subscriptionData, { new: true }).populate('movie_id').populate('member_id');
};

const deleteSubscription = (id) => {
  return Subscription.findByIdAndDelete(id);
};

module.exports = {
  getAllSubscriptions,
  getSubscriptionById,
  addSubscription,
  updateSubscription,
  deleteSubscription,
};