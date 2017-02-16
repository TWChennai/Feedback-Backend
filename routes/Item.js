let express = require('express');
let router = express.Router();
let item = require('../models/item');

router.get('/', function(req, res, next) {
    item.list(req.body.categoryId, (data) => res.json(data))
});

router.post('/', function(req, res) {
    item.add(req.body.categoryId, req.body.type, (data) => res.json(data))
});

module.exports = router;
