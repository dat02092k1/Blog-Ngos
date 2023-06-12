var express = require('express');
var user = require('../controller/user.controller.js');  

const router = express.Router();

// Users 
router.get('/all-user', user.getUsers);
router.post('/create', user.addUser);
router.get('/details/:id', user.getDetailsUser);
router.put('/edit/:id', user.getDetailsUser);

module.exports = router;       