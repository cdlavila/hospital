require('dotenv').config();
const express = require('express');
const cors = require('cors');
const database = require('./src/database');
const apiRouter = require('./src/network/routes');
const useGraphQL = require('./src/graphql');

const app = express();
const port = process.env.PORT || 3000;

// To use JSON format in the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allows all requests from any origin
app.use(cors());

// Establish connection with the database
database().then(() => {
  console.log('Database connected successfully');
});

// API main route
app.use('/api', apiRouter);

// Server main route
app.get('/', (req, res) => (
  res.status(200).json({ message: 'Welcome to the chat server' })
));

// Configure GraphQL
useGraphQL(app).then(() => {
  console.log('GraphQL configured successfully');
});

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = { app, server };
