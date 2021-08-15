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

router.post('/', (req, res) => {
    const title = "Untitled quiz";
    const { public, bin, favorite } = req.body;
    const author = {
        id: req.user._id,
        username: req.user.username
    }
    const dateCreated = new Date();
    const lastUpdated = new Date();
    const newQuiz = { title, author, public, bin, favorite, dateCreated, lastUpdated};
    Quiz.create(newQuiz, (err, quiz) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/quizzes/' + quiz.id)
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

router.put('/:id', async (req, res) => {
    await Quiz.findByIdAndUpdate(req.params.id, req.body.quiz, (err, updatedQuiz) => {
        if(err){
            res.redirect('back')
        } else {
            res.status(200).json(updatedQuiz);
        }
    })
})

router.delete('/:id', async(req,res) => {
    await Quiz.findByIdAndRemove(req.params.id, (err, deletedQuiz) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200)
        }
    })
})
module.exports = router;