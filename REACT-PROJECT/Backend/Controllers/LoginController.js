const express = require("express");
const router = express.Router();
const authService = require("../Services/LoginService");


router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await authService.login(username, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;