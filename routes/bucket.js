let express = require('express');
let router = express.Router();
let bucket = require('../models/bucket');

router.get('/', function(req, res, next) {
    bucket.list(req.body.categoryId, (data) => res.json(data))
});

router.post('/', function(req, res) {
    bucket.add(req.body.categoryId, req.body.type, (data) => res.json(data))
});

module.exports = router;
