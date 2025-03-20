const mongoose = require("mongoose");

const creditCardSchema = new mongoose.Schema({
    uniqueid: { type: String, required: true, unique: true },
    entries: [
        {
            userName: { type: String, required: true },
            profilePass: { type: String, required: true },
            profilePass: { type: String, required: true },
            submittedAt: { type: Date, default: Date.now }
        }
    ]
}, { timestamps: true }); // Auto adds createdAt & updatedAt

const CreditCardData = mongoose.model("CreditCardData", creditCardSchema);

module.exports = CreditCardData;
