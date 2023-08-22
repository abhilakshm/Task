const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data representing users and their followers
let users = [
{ id: 1, username: 'user1', followers: [] },
{ id: 2, username: 'user2', followers: [] },
  // ... Add more users here
];

// Middleware
app.use(express.json());

// Follow a user
app.post('/follow/:userId', (req, res) => {
const { userId } = req.params;
const { followerId } = req.body;

const userToFollow = users.find(user => user.id === parseInt(userId));
const follower = users.find(user => user.id === parseInt(followerId));

if (!userToFollow || !follower) {
    return res.status(404).json({ message: 'User(s) not found' });
}

if (userToFollow.followers.includes(follower.id)) {
    return res.status(400).json({ message: 'You are already following this user' });
}

userToFollow.followers.push(follower.id);

res.status(200).json({ message: `${follower.username} is now following ${userToFollow.username}` });
});

// Start the server
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
