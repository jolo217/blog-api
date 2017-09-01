const express = require('express');
const morgan = require('morgan');

const app = express();

const BlogPostsRouter = require('./BlogPostsRouter');

app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});