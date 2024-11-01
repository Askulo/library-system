const express = require('express');
const router = express.Router();
const Member = require('../models/member');

// Create a new member
router.post('/', async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).send(member);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.send(members);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a specific member by ID
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).send("Member not found");
    res.send(member);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a member by ID
router.put('/:id', async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!member) return res.status(404).send("Member not found");
    res.send(member);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a member by ID
router.delete('/:id', async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).send("Member not found");
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

// Borrow a book (add to borrowedBooks array)
router.post('/:id/borrow', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).send("Member not found");

    member.borrowedBooks.push({ book: req.body.bookId });
    await member.save();

    res.send(member);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Return a book (mark as returned in borrowedBooks array)
router.post('/:id/return', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).send("Member not found");

    const borrowedBook = member.borrowedBooks.find(b => b.book.toString() === req.body.bookId);
    if (borrowedBook) borrowedBook.returned = true;

    await member.save();
    res.send(member);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
