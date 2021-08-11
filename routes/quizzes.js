const express = require('express');
const router = express.Router;
const Quiz = require('../models/Quiz');

router.get('/', async (req, res) => {
    await Quiz.find({ 'author.id': req.user._id }, (err, quizzes) => {
        if(err){
            res.redirect('back')
        } else {
            res.status(200).json(quizzes);
        }
    })
})
module.exports = router;