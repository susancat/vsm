import React, { useState, useEffect }from 'react';
import axios from 'axios';

import Header from '../Header';
import QuizRow from './QuizRow';

//fetch all quizzes and loop
const QuizList = () => {
    const [quizzes, setQuizzes] = useState(null);
    useEffect(() => {
        getQuizzes()
    },[quizzes])

    function getQuizzes(){
        axios.get(`http://localhost:3001/api/quizzes`)
        .then(async res => {
            setQuizzes(res.data)
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="mt-5">
            <Header />
        { quizzes.map(quiz => {
            return(
                <QuizRow id={quiz._id} />
            )
        })}
        </div>
    )
}

export default QuizList;
