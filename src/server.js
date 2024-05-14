const express = require('express');
const mongoose = require('mongoose');
const Registration = require('./models/Registration'); // Import the Registration model

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Expandergym', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Route for user registration
app.post('/api/register', async (req, res) => {
  try {
    // Extract user details from request body
    const { fullName, email, password } = req.body;

    // Create a new registration instance
    const registration = new Registration({ fullName, email, password });

    // Save the registration to the database
    await registration.save();

    // Send a success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Send an error response if registration fails
    console.error('Registration failed:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
