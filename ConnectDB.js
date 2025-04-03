const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'Admin',
  password: 'impacthub2025',
  database: 'impacthub'
});

// API endpoint
app.post('/api/data', (req, res) => {
  const query = 'SELECT * FROM your_table WHERE id = ?';
  db.query(query, [req.body.id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3306, () => {
  console.log('Server running on port 3306');
});