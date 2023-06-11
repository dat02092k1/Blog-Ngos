var express = require('express');
var user = require('../controller/user.controller.js');  

const router = express.Router();

// Users 
router.get('/all-user', user.getUsers);
router.post('/create', user.addUser);

module.exports = router;       