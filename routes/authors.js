const express = require('express');
const router = express.Router();
const Author = require('../models/author');

// Create a new author
router.post('/', async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).send(author);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all authors
router.get('/', async (req, res) => {
  try {
    const authors = await Author.find();
    res.send(authors);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a specific author by ID
router.get('/:id', async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).send("Author not found");
    res.send(author);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update an author by ID
router.put('/:id', async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!author) return res.status(404).send("Author not found");
    res.send(author);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete an author by ID
router.delete('/:id', async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) return res.status(404).send("Author not found");
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
