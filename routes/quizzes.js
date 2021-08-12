const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

router.get('/', async (req, res) => {
    await Quiz.find({}, (err, quizzes) => {
        if(err){
            res.redirect('back')
        } else {
            res.status(200).json(quizzes);
        }
    })
})

router.get('/:id', async (req, res) => {
    await Quiz.findById(req.params.id, (err, quiz) => {
        if(err){
            res.redirect('back')
        } else {
            res.status(200).json(quiz);
        }
    })
})
module.exports = router;