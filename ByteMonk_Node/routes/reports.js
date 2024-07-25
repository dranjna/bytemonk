const express = require('express');
const router = express.Router();
const reports = require('../data');

// Get all reports
router.get('/reports', (req, res) => {
    res.json(reports);
});

module.exports = router;
