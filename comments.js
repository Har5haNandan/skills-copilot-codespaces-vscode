// Create web server
// Create a route for POST /comments
// Get the comment from the request body
// Push the comment to the comments array
// Send back a success response
// Create a route for GET /comments
// Send back the comments array as a response

const express = require('express');
const path = require('path');
const app = express();
const comments = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.status(200).send('Comment added');
});

app.get('/comments', (req, res) => {
  res.status(200).send(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});