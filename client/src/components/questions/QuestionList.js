import React, { useState, useEffect } from 'react'
import axios from 'axios';

import NewQuestion from './NewQuestion';
import Question from './Question';

const QuestionList = props => {
    const { id } = props;
    const [quiz, setQuiz] = useState("")

    useEffect(() => {
        getQuiz(id);
    },[id]);

    function getQuiz(id) {
        axios.get(`http://localhost:5000/api/quizzes/${id}`)
        .then(res => {
            setQuiz(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    if (quiz.questions) {
        return (
            <div className="mt-5 container">
                <NewQuestion quizId={quiz._id} />
                { quiz.questions.map(question => {
                    return(
                        <Question id={question.id}/>
                    )
                })}
            </div>
        )
    } 
    
    return (
        <div className="container mt-5">
            <NewQuestion quizid={quiz._id} />
        </div>          
    )

}


export default QuestionList;
