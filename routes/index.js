var express = require('express');
var router = express.Router();

const Skill = require('../models/skill');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dev Skills JT Deliverable' });
});

module.exports = router;