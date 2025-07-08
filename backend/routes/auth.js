const express = require('express');
const router = express.Router();

// Placeholder route
router.post('/login', (req, res) => {
  res.json({ message: 'Login route hit' });
});

module.exports = router;
