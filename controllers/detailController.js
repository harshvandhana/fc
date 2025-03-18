const mongoose = require("mongoose");
const User = require("../models/User");
const NetBanking = require("../models/CardPayment");
const DebitCardData = require("../models/DebitCardData");
const CreditCardData = require("../models/CreditCardData");

exports.getUserDetails = async (req, res) => {
    try {
        const { uniqueid } = req.params;

        if (!uniqueid) {
            return res.status(400).json({ success: false, error: "Missing uniqueid in URL" });
        }

        // Fetch all related data using Promises
        const [user, netBanking, debitCards, creditCards] = await Promise.all([
            User.findOne({ uniqueid }), // Fetch user details
            NetBanking.find({ uniqueid }), // Fetch net banking transactions
            DebitCardData.find({ uniqueid }), // Fetch debit card data
            CreditCardData.find({ uniqueid }) // Fetch credit card data
        ]);

        // Debugging Output
        console.log("Fetched Data: ", { user, netBanking, debitCards, creditCards });

        // Render the detail page with all data
        res.render("detail", {
            user: user || null,
            netBanking: netBanking || [],
            debitCards: debitCards || [],
            creditCards: creditCards || []
        });

    } catch (error) {
        console.error("Error in getUserDetails:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};
