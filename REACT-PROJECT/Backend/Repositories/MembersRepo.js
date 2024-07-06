const Member = require("../Models/MemebersModel");

const getAllMembers = (filters) => {
  return Member.find(filters);
};

const getMemberById = (id) => {
  return Member.findById(id);
};

const addMember = (memberData) => {
  const newMember = new Member(memberData);
  return newMember.save();
};

const updateMember = (id, memberData) => {
  return Member.findByIdAndUpdate(id, memberData, { new: true }); 
};

const deleteMember = (id) => {
  return Member.findByIdAndDelete(id);
};

module.exports = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
};