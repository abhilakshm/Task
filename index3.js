const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data representing posts
const posts = [
{ id: 1, userId: 1, content: 'Hello, world!' },
{ id: 2, userId: 2, content: 'Another post.' },
  // ... Add more posts here
];

// Middleware
app.use(express.json());

// Read user's feed
app.get('/feed/:userId', (req, res) => {
const { userId } = req.params;
const userPosts = posts.filter(post => post.userId === parseInt(userId));

res.status(200).json(userPosts);
});

// Start the server
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
