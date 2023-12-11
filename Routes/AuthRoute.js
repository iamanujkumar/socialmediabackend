const express = require('express');
const { loginUser, registerUser } = require('../Controllers/AuthControllers.js');

const router = express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)

export default router