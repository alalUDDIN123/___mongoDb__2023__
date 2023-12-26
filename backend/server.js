
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the actual origin of your React app
  credentials: true,
};

app.use(cors(corsOptions));


// Secret key for JWT
const secretKey = 'yourSecretKey';

// Dummy user data for demonstration
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// base route 
app.get("/",(req,res)=>{
  res.status(200).json({
    message:"Welcome"
  })
})
// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Create a token with a short expiration time (2 minutes)
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '2m' });

  // Set the token as a cookie
  res.cookie('token', token, { httpOnly: true, maxAge: 120000 });

  res.json({ message: 'Login successful', user });
});

// Route to get user data
app.get('/user', (req, res) => {
  // Retrieve token from the cookie
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Verify the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = users.find((u) => u.id === decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    res.json({ user });
  });
});
// Route to get a random unique number
app.get('/random-number', (req, res) => {
  // Retrieve token from the cookie
  const token = req.cookies.token;
  console.log('token',token)

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Verify the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Generate a random unique number (replace with your logic)
    const randomNumber = Math.floor(Math.random() * 1000000);

    res.json({ randomNumber });
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
