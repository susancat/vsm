const passport = require('passport');
const express = require("express");
const router = express.Router();

router.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get('/auth/google/callback', passport.authenticate('google'),
    (req, res) => {
        res.redirect('/');
});

router.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
    // console.log(req)
    res.send(req.user)
});

module.exports = router;