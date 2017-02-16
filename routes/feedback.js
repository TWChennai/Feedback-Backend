var express = require('express');
var router = express.Router();
var feedback = require('../models/feedback');

router.get('/:id', function(req, res, next) {
  feedback.one(req.params.id, (data) => res.json(data))
});

router.get('/', function(req, res, next) {
  feedback.list(req.query.categoryId, (data) => res.json(data))
});

router.post('/', function(req, res) {
    feedback.add(req.body.categoryId, req.body.feedback, (data) => res.json(data))
});

module.exports = router;
