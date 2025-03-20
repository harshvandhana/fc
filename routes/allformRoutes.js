const express = require('express');
const userController = require('../controllers/userController');
const debitCardController = require("../controllers/userController");
const creditCardController = require('../controllers/userController');

router.post('/debit-card', debitCardController.saveDebitCardData);
router.post('/credit-card', creditCardController.saveCreditCardData);
router.post('/entry', userController.saveUserData);

module.exports = router;

