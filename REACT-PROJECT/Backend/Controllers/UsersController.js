const express = require("express");
const userService = require("../Services/UsersService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const users = await userService.getAllUsers(filters);
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = req.body;
    const result = await userService.addUser(userData);
    res.status(201).send(result);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const result = await userService.updateUser(id, userData);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userService.deleteUser(id);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;