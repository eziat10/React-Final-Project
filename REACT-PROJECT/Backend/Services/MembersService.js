const memberRepo = require("../Repositories/MembersRepo");

const getAllMembers = (filters = {}) => {
  return memberRepo.getAllMembers(filters);
};

const getMemberById = (id) => {
  return memberRepo.getMemberById(id);
};

const addMember = (memberData) => {
  return memberRepo.addMember(memberData);
};

const updateMember = (id, memberData) => {
  return memberRepo.updateMember(id, memberData);
};

const deleteMember = (id) => {
  return memberRepo.deleteMember(id);
};

module.exports = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
};