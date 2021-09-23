import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import axios from 'axios';

const Question = (props) => {
    const { quizId, id } = props;
    const [question, setQuestion] = useState('');

    useEffect(() => {
        getQuestion(id)
    },[id])

    function getQuestion(id) {
        axios.get(`/api/quizzes/${quizId}/questions/${id}`)
        .then(res => {
            setQuestion(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div key={question._id} className="card mt-2 border-primary col-md-6 col-sm-12">
            <h5 className="card-header">{question.text}</h5>
            <div className="card-body">
                <div className="row">
                    <p className="card-text col-lg-6"><i class="fa fa-check-circle" aria-hidden="true" style={{color:"green"}}></i> Option 1: {question.option1}</p>
                    <p className="card-text col-lg-6"><i class="fa fa-times-circle" aria-hidden="true" style={{color:"red"}}></i> Option 2: {question.option2}</p>
                </div>
                <div className="row">
                    <p className="card-text col-lg-6"><i class="fa fa-times-circle" aria-hidden="true" style={{color:"red"}}></i> Option 3: {question.option3}</p>
                    <p className="card-text col-lg-6"><i class="fa fa-times-circle" aria-hidden="true" style={{color:"red"}}></i> Option 4: {question.option4}</p>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-end">
                <Link to="#" class="btn btn-warning me-2">Edit</Link>
                <Link to="#" class="btn btn-danger">Delete</Link>
            </div>
        </div>
    )
}

export default Question;
