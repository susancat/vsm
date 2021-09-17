import React, { useState, useEffect }from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const QuizRow = (props) => {
    const {id} = props;
    console.log(id)
    const [quiz, setQuiz] = useState("");

    useEffect(() => {
        getQuiz(id)
    },[id]);

    function getQuiz(id) {
        axios.get(`http://localhost:5000/api/quizzes/${id}`)
        .then(res => {
            setQuiz(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <tr>
            <th><Link to={{ pathname: `/quizzes/${quiz._id}`, state: {id: quiz._id} }} scope="row">{quiz.title}</Link></th>
            <th>{quiz.public}</th>
            <th>{quiz.favorite}</th>
            { quiz.questions !== 0 && quiz.questions !== undefined ?
                <th>{quiz.questions.length}</th> :
                <th>0</th>
            }
            <th>{quiz.grade}</th>
            <th>{quiz.category}</th>
            {quiz.lastUpdated ?
                <th>{quiz.lastUpdated.toLocaleString()}</th> :
                <th>{quiz.lastUpdated}</th>
            }
            <th><i class="fa fa-trash" aria-hidden="true"></i></th>
        </tr>
    )
}

export default QuizRow;