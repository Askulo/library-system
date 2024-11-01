

# Library Management System

A Node.js and MongoDB-based Library Management System that allows users to manage books, authors, categories, and members. This API enables CRUD operations for all resources.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Overview

This project is a RESTful API for a library management system built with Node.js, Express, and MongoDB. It allows users to manage books, authors, categories, and members through various CRUD operations.

## Features

- Add, update, delete, and view books
- Manage authors, categories, and members
- Organized structure with routes, controllers, and models

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM library for MongoDB and Node.js
- **dotenv** - Environment variable management

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/library-management-system.git
   cd library-management-system
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB**:
   - Make sure you have a MongoDB instance running, either locally or using MongoDB Atlas.
   - Add your MongoDB URI in the `.env` file (see Environment Variables section below).

4. **Start the server**:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory with the following content:

```
MONGODB_URI=your_mongodb_connection_string
PORT=4000
```

- `MONGODB_URI`: Your MongoDB connection string (e.g., from MongoDB Atlas).
- `PORT`: Port on which the server will run (default is 4000).

## Usage

Once the server is running, you can use Postman or any API client to interact with the endpoints. The base URL will be:

```
http://localhost:4000
```

## API Endpoints

### Books

- **GET /books** - Get all books
- **POST /books** - Add a new book
- **GET /books/:id** - Get a book by ID
- **PUT /books/:id** - Update a book by ID
- **DELETE /books/:id** - Delete a book by ID

### Authors

- **GET /authors** - Get all authors
- **POST /authors** - Add a new author
- **GET /authors/:id** - Get an author by ID
- **PUT /authors/:id** - Update an author by ID
- **DELETE /authors/:id** - Delete an author by ID

### Categories

- **GET /categories** - Get all categories
- **POST /categories** - Add a new category
- **GET /categories/:id** - Get a category by ID
- **PUT /categories/:id** - Update a category by ID
- **DELETE /categories/:id** - Delete a category by ID

### Members

- **GET /members** - Get all members
- **POST /members** - Add a new member
- **GET /members/:id** - Get a member by ID
- **PUT /members/:id** - Update a member by ID
- **DELETE /members/:id** - Delete a member by ID

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

