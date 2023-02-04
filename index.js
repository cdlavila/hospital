require('dotenv').config();
const express = require('express');
const cors = require('cors');
const database = require('./src/database');
const useGraphQL = require('./src/graphql');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

database().then(() => {
  console.log('Database connected successfully');
});

app.get('/', (req, res) => (
  res.status(200).json({ message: 'Welcome to the hospitals server' })
));

useGraphQL(app).then(() => {
  console.log(`GraphQL API running on http://localhost:${port}/graphql`);
});

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = { app, server };
