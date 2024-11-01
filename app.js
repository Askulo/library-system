const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/books', require('./routes/books'));
app.use('/authors', require('./routes/authors'));
app.use('/categories', require('./routes/categories'));
app.use('/members', require('./routes/members'));

// Start the server
const port =4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
