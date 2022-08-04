const express = require('express');
const router = express.Router();


 const {detail} = require('../controllers/productControllers')

 router
 .get('/detail/:id', detail)

 module.exports = router;