const mongoose = require('mongoose');
const billSchema = mongoose.Schema({

    bill_date: { type: String, required: true },
    paid_date: { type: String, required: true },
    unit_consumed: { type: Number, required: true },
    amount: { type: Number, required: true }
});
module.exports = mongoose.model('BillData', billSchema);