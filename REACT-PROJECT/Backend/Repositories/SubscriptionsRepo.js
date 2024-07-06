const Subscription = require("../Models/SubscriptionsModel");

const getAllSubscriptions = (filters) => {
  return Subscription.find(filters);
};

const getSubscriptionById = (id) => {
  return Subscription.findById(id);
};

const addSubscription = (subscriptionData) => {
  const newSubscription = new Subscription(subscriptionData);
  return newSubscription.save();
};

const updateSubscription = (id, subscriptionData) => {
  return Subscription.findByIdAndUpdate(id, subscriptionData, { new: true }); 
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