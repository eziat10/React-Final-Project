const express = require("express");
const memberService = require("../Services/MembersService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const members = await memberService.getAllMembers(filters);
    res.send(members);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const member = await memberService.getMemberById(id);
    res.send(member);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const memberData = req.body;
    const result = await memberService.addMember(memberData);
    res.status(201).send(result);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const memberData = req.body;
    const result = await memberService.updateMember(id, memberData);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await memberService.deleteMember(id);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
