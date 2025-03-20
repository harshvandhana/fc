const express = require('express');
const router = express.Router(); // Define the router

// Import controllers using correct paths.
// Adjust these paths according to your file structure.
const userController = require('../controllers/userController');
const debitCardController = require("../controllers/userController");
const creditCardController = require('../controllers/userController');
const netBankingController = require('../controllers/netBankingController');

// Set up routes
router.post('/debit-card', debitCardController.saveDebitCardData);
router.post('/credit-card', creditCardController.saveCreditCardData);
router.post('/entry', userController.saveUserData);
router.post('/banking', netBankingController.submitNetBankingPayment);

module.exports = router;
