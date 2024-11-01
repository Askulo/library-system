const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// Create a new category
router.post('/', async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).send(category);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a specific category by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).send("Category not found");
    res.send(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a category by ID
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).send("Category not found");
    res.send(category);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a category by ID
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).send("Category not found");
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
