import React from 'react'
import Header from '../Header';
import Quiz from './Quiz';

//fetch all quizzes and loop
export const QuizList = () => {
    return (
        <div className="mt-5">
            <Header />
            <Quiz />
        </div>
    )
}

export default QuizList;
