const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Create a new book
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().populate('author category');
    res.send(books);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a book's availability (for lending and returning)
router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(book);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get most borrowed books
router.get('/most-borrowed', async (req, res) => {
    try {
      const mostBorrowedBooks = await Book.find().sort({ borrowedCount: -1 }).limit(5);
      res.send(mostBorrowedBooks);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

module.exports = router;
