var express = require('express');
var router = express.Router();
var category = require('../models/category');

router.get('/', function(req, res, next) {
  category.list((data) => res.json(data))
});

router.post('/', function(req, res) {
    category.add(req.body.name, (data) => res.json(data))
});

module.exports = router;
