const express = require('express');
const router =express.Router();
// const User = require('../../models/User');

// const verifyId = require('../../utils/auth/verifyId');

router.get('/signup', (req, res) => {
    res.render('auth/signup.html',)
})

module.exports = router;