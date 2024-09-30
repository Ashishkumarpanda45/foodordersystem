const express = require('express');
const mysql = require('mysql2'); // Change this line

const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',   // Database host
    user: 'root',        // Database username
    password: 'Ashish@123', // Database password
    database: 'dhaba'    // Database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Use body-parser middleware to parse JSON
app.use(bodyParser.json());

// Example API endpoint to test connection
app.post('/addUser', (req, res) => {
    const { name, email, password } = req.body; // Get data from the request body
    const sql = 'INSERT INTO users ( email, password) VALUES ( ?, ?)';
    
    db.query(sql, [ email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'User added successfully', userId: result.insertId });
    });
});


// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length > 0) {
            res.json({ message: 'Login successful', user: result[0] });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
