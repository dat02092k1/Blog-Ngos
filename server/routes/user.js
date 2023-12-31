var express = require('express');
var user = require('../controller/user.controller.js');  
var auth = require('../controller/auth.controller.js');  

const router = express.Router();

// Users 
router.get('/all-user', user.getUsers);
router.post('/create', auth.registerUser);
router.get('/details/:id', user.getDetailsUser);
router.put('/edit/:id', user.editUser);
router.delete('/delete/:id', user.deleteUser);

module.exports = router;       