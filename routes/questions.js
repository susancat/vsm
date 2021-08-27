const express = require('express'),
      router = express.Router({mergeParams: true}),
      Quiz = require('../models/Quiz'),
      Question = require('../models/Question');

router.post('/', async (req,res) => {
    const { text, option1, option2, option3, option4, category, level, type, public, image, assetId } = req.body;
    const author = {
        id: req.user._id,
        username: req.user.username
    };
    const newQuestion = { text, level, category, type, option1, option2, option3, option4, public, author, image, assetId };
    // const newQuestionBank = { text: text, level: level, category: category, type: type, option1: option1, option2: option2, option3: option3, option4: option4, public: public, author: author, image: image, assetId: assetId };

    await Quiz.findById(req.params.id, async function(err, quiz){
        if(err){
            console.log(err);
            res.redirect("back");
        } else {
            Question.create(newQuestion, async function(err, question){
                if (err){
                    req.flash("error", "Something went wrong!");
                    console.log(err);
                } else {
                    await question.save();
                    await quiz.questions.push(question);
                    await quiz.save();                
                    res.status(200).json(question)
                }
            })
       }
    });
})

router.get("/:question_id",async (req,res) => {
    await Quiz.findById(req.params.id, async (err,foundQuiz) => {
        if(err){
            console.log(err);
        } else {
            await Question.findById(req.params.question_id, function(err,foundQuestion){
                res.status(200).json(foundQuestion)
            })
        }
    });
})

module.exports = router;
