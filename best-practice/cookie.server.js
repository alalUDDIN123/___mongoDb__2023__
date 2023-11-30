const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB (Make sure you have MongoDB server running)
mongoose.set("strictQuery", true);
mongoose.connect('mongodb+srv://al:ml@cluster0.4hcb0ne.mongodb.net/best-pratice?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000', // Allow requests from this origin
        credentials: true, // Enable credentials (cookies, authorization headers)
    })
);

// Secret key for JWT
const secretKey = 'ada24234';

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const cookies = req.headers?.cookie;

    if (!cookies) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    const tokenCookie = cookies.split(';').find(cookie => cookie.trim().startsWith('practice_token='));

    if (!tokenCookie) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    const token = tokenCookie.split('=')[1].trim();

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token is not valid', error: err.message });
        }
        req.user = user;
        next();
    });
};

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Routes
app.post('/login', (req, res) => {
    // In a real application, you would verify the user's credentials and generate a token
    const user = { id: 1, username: 'example' };
    const token = jwt.sign(user, secretKey);

    // Set the token as a cookie manually with expiration time
    const expirationTime = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes in milliseconds
    res.setHeader('Set-Cookie', `practice_token=${token}; HttpOnly; Expires=${expirationTime.toUTCString()}`);

    res.json({ message: 'Login successful' });
});

app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected route', user: req.user, status: true });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
