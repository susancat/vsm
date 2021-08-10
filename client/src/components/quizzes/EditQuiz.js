import React from 'react'

import EditHeader from './EditHeader';
import QuestionList from './QuestionList';
import Question from './Question';
import QuestionAttr from './QuestionAttr';

const EditQuiz = () => {
    return (
        <div>
            <EditHeader />
            <QuestionList />
            <Question />
            <QuestionAttr />
        </div>
    )
}

export default EditQuiz;
