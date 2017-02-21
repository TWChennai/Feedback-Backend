var express = require('express');
var router = express.Router();
var item = require('../models/item');

router.get('/', function(req, res, next) {
    item.list(req.query.categoryId, (data) => res.json(data))
});

router.post('/', function(req, res) {
    item.add(req.body.categoryId, req.body.type, (data) => res.json(data))
});

module.exports = router;
