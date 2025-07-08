const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Placeholder route
router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'Sales file uploaded' });
});

module.exports = router;
