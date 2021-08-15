import React, {useState,useEffect} from 'react'
import axios from 'axios';

const Quiz = ({id}) => {
    const [quiz, setQuiz] = useState(null);
    useEffect(() => {
        getQuiz(id)
        //get id from line4 and pass to function getQuiz
    },[id]);

    function getQuiz(id) {
        axios.get(`/api/quizzes/${id}`)
        .then(async res => {
            setQuiz(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="mt-5">
            <h1>I am one quiz</h1>
            <h1>{quiz.title}</h1>
        </div>
    )
}

export default Quiz;
