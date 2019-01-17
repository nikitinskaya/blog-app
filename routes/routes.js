const express = require('express');

// const Document = require('../models/Document');
const router = express.Router();

router.get('/posts', (req, res, next) => {
    req.app.locals.db.collection('documents').find({}).toArray((err, result) => {
        if (err) {
            res.status(400).send({ 'error': err })
        }
        if (result === undefined || result.length === 0) {
            res.status(400).send({ 'error': 'No documents in database' })
        } else {
            res.status(200).send(result)
        }
    })
})

module.exports = router;
