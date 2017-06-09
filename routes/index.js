var express = require('express');
var router = express.Router();
var validate = require ('../server/ValidateEnglishChar');

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log("test");
  res.render('index', { title: 'Express' });
  validate("string");
});

module.exports = router;
