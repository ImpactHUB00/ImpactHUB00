// server.js
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL database configuration
const dbConfig = {
  host: 'localhost',
  user: 'Admin',
  password: 'impacthub2025',
  database: 'impacthub'
};

app.get('/api/events', async (req, res) => {
    try {
      const connection = await mysql.createConnection(dbConfig);
      const [rows] = await connection.execute(`
        SELECT 
          id_event,
          name_event,
          age,
          description,
          organisation_name,
          
        FROM volunteering_events
        ORDER BY created_at DESC
      `);
      connection.end();
      res.json(rows);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  });
  
  // API endpoint to create a new event
  app.post('/api/events', async (req, res) => {
    const { name_event, age, description, organisation_name } = req.body;
    
    if (!name_event || !age || !description || !organisation_name) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
      const connection = await mysql.createConnection(dbConfig);
      const [result] = await connection.execute(
        `INSERT INTO volunteering_events 
        (name_event, age, description, organisation_name) 
        VALUES (?, ?, ?, ?)`,
        [name_event, age, description, organisation_name]
      );
      connection.end();
      res.status(201).json({ 
        id_event: result.insertId, 
        message: 'Event created successfully' 
      });
    } catch (error) {
      console.error('Error creating event:', error);
      res.status(500).json({ error: 'Failed to create event' });
    }
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });