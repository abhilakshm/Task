const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data representing posts
let posts = [
{ id: 1, userId: 1, content: 'Hello, world!' },
{ id: 2, userId: 2, content: 'Another post.' },
  // ... Add more posts here
];

let postIdCounter = 3; // To generate unique post IDs

// Middleware
app.use(express.json());

// Create a new post
app.post('/post', (req, res) => {
const { userId, content } = req.body;

if (!userId || !content) {
    return res.status(400).json({ message: 'User ID and content are required' });
}

const newPost = {
    id: postIdCounter++,
    userId,
    content
};

posts.push(newPost);

res.status(201).json(newPost);
});

// Start the server
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
