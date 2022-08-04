var express = require('express');
var router = express.Router();

/* GET home page. */
const {index}= require('../controllers/indexControllers');

router.get('/', index);

module.exports = router