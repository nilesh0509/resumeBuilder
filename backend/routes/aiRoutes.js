const express = require('express');
const { analyzeResume } = require('../controllers/aiController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/analyze', auth, analyzeResume);

module.exports = router;