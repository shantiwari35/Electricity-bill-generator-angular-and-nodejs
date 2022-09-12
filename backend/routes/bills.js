const express = require('express');
const BillData = require('../models/BillData');
const router = express.Router();
const Bill = require('../models/BillData');

router.post("", (req, res, next) => {
    console.log(req.body)
    const bill = new BillData({
        bill_date: req.body.bill_date,
        paid_date: req.body.paid_date,
        unit_consumed: req.body.unit_consumed,
        amount: req.body.amount
    });
    console.log(bill);
    bill.save().then(result => {
        res.status(201).json({
            message: "bill added successfully",
            billId: result._id
        });
    });

});
router.get('', (req, res, next) => {

    Bill.find().then(data => {
        res.status(200).json({
            message: 'bill fetched successfully',
            data: data
        });
    });
});
router.put("/bill/:id", (req, res, next) => {
    const post = new BillData({
        _id: req.params.id,
        bill_date: req.body.bill_date,
        paid_date: req.body.paid_date,
        unit_consumed: req.body.unit_consumed,
        amount: req.body.amount
    });
    Bill.updateOne({ _id: req.params.id }, post).then(result => {
        res.status(200).json({ message: "updated successfully" })
    });
});
router.get('/bill/:id', (req, res, next) => {
    Bill.findById(req.params.id).then(post => {
        if (post) {
            res.status(200).json({
                message: "bill found successfully!",
                post: post
            });
        } else {
            res.status(404).json({
                message: "bill not found"
            })
        }
    })
})
router.delete('/bill/:id', (req, res, next) => {

    Bill.deleteOne({ _id: req.params.id }).then(data => {
        console.log(data);
        res.status(200).json({
            message: 'bill deleted!',
            id: req.params.id
        });
    });
});

module.exports = router;