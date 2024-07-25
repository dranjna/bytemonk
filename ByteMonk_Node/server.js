const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // only if you're connecting to MongoDB
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow requests from any origin
app.use(express.json());

// Routes
const reportRoutes = require('./routes/reports');
app.use('/api', reportRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Route to filter reports by category
app.get('/api/reports/filter', (req, res) => {
    const { category } = req.query;
    
    // If no category is provided, return all reports
    if (!category) {
      return res.json(reports);
    }
    
    // Filter reports based on category
    const filteredReports = reports.filter(report => report.category.toLowerCase() === category.toLowerCase());
  
    // Return filtered reports
    res.json(filteredReports);
  });

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
