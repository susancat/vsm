import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import QuestionList from '../questions/QuestionList';
import DeleteBtn from './DeleteBtn';
import EditModal from './EditModal';

const Quiz = props => {
    const { id } = props.location.state;

    const [quiz, setQuiz] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        getQuiz(id)
        //get id from line4 and pass to function getQuiz
    },[id]);

    function getQuiz(id) {
        axios.get(`http://localhost:5000/api/quizzes/${id}`)
        .then(res => {
            setQuiz(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="row mt-5 mb-2">
            <div className="col-md-3 card bg-light">
                <div className="card-body mt-2 ml-2 pr-0">
                    <h4 className="d-flex justify-content-between">
                        Quiz name: { quiz.title }
                    </h4>
                    <h6>Category: { quiz.category }</h6>
                    <h6>Grade: { quiz.grade }</h6>
                    <h6>Difficulty: { quiz.level }</h6>
                    <p>{ quiz.description }</p>
                    <div className="row mb-2">
                        <button className="btn btn-xs btn-success me-1" type="submit" style={{width: '30%'}}>Play</button>   
                        <button className="btn btn-xs btn-warning me-1" onClick={() => setShow(true)} style={{width: '30%'}}>&nbsp;Edit&nbsp;</button>
                        <EditModal show={show} onClose={() => setShow(false)} id={quiz._id}  />
                        <DeleteBtn id={quiz._id} />
                    </div>
                    {quiz.public === false ?
                     <h6>A private quiz</h6> : <h6>A public quiz</h6>
                    }
                    {/* <p className="mt-2"><em>Created By { quiz.author.username }</em></p> */}
                </div>
            </div>
            <div className="col-md-9">
                <QuestionList id={quiz._id}/>
            </div>
        </div>
    )
}

export default Quiz;
