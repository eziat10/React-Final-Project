const express = require("express");
const subscriptionService = require("../Services/SubscriptionsService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const subscriptions = await subscriptionService.getAllSubscriptions(filters);
    res.send(subscriptions);
  } catch (error) {
    res.send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const subscription = await subscriptionService.getSubscriptionById(id);
    res.send(subscription);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const subscriptionData = req.body;
    const result = await subscriptionService.addSubscription(subscriptionData);
    res.status(201).send(result);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const subscriptionData = req.body;
    const result = await subscriptionService.updateSubscription(id, subscriptionData);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await subscriptionService.deleteSubscription(id);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;