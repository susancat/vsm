import React, { useState, useEffect } from 'react'
import axios from 'axios';

import NewQuestion from './NewQuestion';

const QuestionList = props => {
    console.log(props)
    const { id } = props;
    const [quiz, setQuiz] = useState(0)

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
            <div className="mt-5">
                { quiz.questions.map(question => {
                    return(
                        <h4>{question.text}</h4>
                    )
                })}
                <NewQuestion />
            </div>
        )
    } 
    
    return (
        <div className="container mt-5">
            <NewQuestion />
        </div>          
    )

}


export default QuestionList;
