const express = require('express');
const router = express.Router();
const { processPayment, verifyPayment } = require('../controllers/paymentController');
const { authenticateJWT } = require('../middleware/auth');

// Route to process payment
router.post('/process', authenticateJWT, processPayment);

// Route to verify payment
router.get('/verify/:transactionId', authenticateJWT, verifyPayment);

module.exports = router;