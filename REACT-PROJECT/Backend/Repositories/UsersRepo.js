const User = require("../Models/UsersModel");


const getAllUsers = (filters) => {
  return User.find(filters);
};

const getUserById = (id) => {
  return User.findById(id);
};

const addUser = (userData) => {
  const newUser = new User(userData);
  return newUser.save();
};

const updateUser = (id, userData) => {
  return User.findByIdAndUpdate(id, userData, { new: true }); 
};

const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};