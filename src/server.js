const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 2001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', // Replace with your MySQL username
    password: 'oumaima123', // Replace with your MySQL password
    database: 'User' // Replace with your MySQL database name
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.json({ success: false, message: 'Please provide both username and password.' });
    }

    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false, message: 'Invalid username or password.' });
        }
    });
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
      return res.json({ success: false, message: 'Please provide both username and password.' });
  }

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err) => {
      if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
              return res.json({ success: false, message: 'User already exists.' });
          }
          throw err;
      }
      res.json({ success: true });
  });
});