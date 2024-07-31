// Use ES module syntax
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection setup
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'oumaima123',
  database: 'user',
  port: 3306 // Default MySQL port
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length > 0) {
      const user = rows[0];
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.json({ message: 'Login successful!' });
      } else {
        res.status(400).json({ error: 'Invalid email or password' });
      }
    } else {
      res.status(400).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'An error occurred while connecting to the database' });
  }
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if email already exists
    const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    await pool.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'An error occurred while connecting to the database' });
  }
});

const PORT = 2001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
