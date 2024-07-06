const userRepo = require("../Repositories/UsersRepo");

const getAllUsers = (filters = {}) => {
  return userRepo.getAllUsers(filters);
};

const getUserById = (id) => {
  return userRepo.getUserById(id);
};

const addUser = (userData) => {
  return userRepo.addUser(userData);
};

const updateUser = (id, userData) => {
  return userRepo.updateUser(id, userData);
};

const deleteUser = (id) => {
  return userRepo.deleteUser(id);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};