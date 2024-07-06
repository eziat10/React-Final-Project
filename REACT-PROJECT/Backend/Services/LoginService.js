const User = require("../Models/UsersModel");

async function login(username, password) {
  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      throw new Error("Invalid username or password");
    }

    return { message: "Login successful" };
  } catch (error) {
    throw new Error("Login failed: " + error.message);
  }
}

module.exports = { login };