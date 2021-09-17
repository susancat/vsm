import React, { useState, useEffect } from 'react'

import axios from 'axios';
import '../App.css';

const NewQuestion = (props) => {
    const { quizId } = props;
    const [text, setText] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [type, setType] = useState('Multiple Choice');

    const postData = (e) => {
        axios.post(`/api/quizzes/${quizId}/questions`, {
            text, 
            option1, 
            option2, 
            option3, 
            option4, 
            type
        })
    }

    return (
        <div className="card bg-light border-success">
            <form>
                <div className="form-group card-header">
                    <input className="form-control" type="text" placeholder="Start to type your question" onChange={(e) => setText(e.target.value)} style={{ backgroundColor:'grey', fontSize:'4vw',color:'#fff' }}/>
                </div> 
                <div className="card-body">
                    <div className="row">
                        <input className="form-control me-2" type="text" placeholder="answer 1 (the correct answer)" onChange={(e) => setOption1(e.target.value)} style={{width: '49%', backgroundColor: '#d9534f',fontSize:'2vw',color:'#fff'}} />
                        <input className="form-control" type="text" placeholder="answer 2" onChange={(e) => setOption2(e.target.value)} style={{width: '49%',backgroundColor:'#5cb85c',fontSize:'2vw',color:'#fff'}}/>
                    </div>
                    <div className="row mt-1">
                        <input className="form-control me-2" type="text" placeholder="answer 3" onChange={(e) => setOption3(e.target.value)} style={{width: '49%',backgroundColor: '#0275d8',fontSize:'2vw',color:'#fff'}}/>
                        <input className="form-control" type="text" placeholder="answer 4" onChange={(e) => setOption4(e.target.value)} style={{width: '49%',backgroundColor: 'rgb(245, 213, 72)',fontSize:'2vw',color:'#fff'}}/>
                    </div>
                    <div className="row mt-1">
                        <select name="type" id="" className="form-control" onChange={(e) => setType(e.target.value)}>
                            <option value="Multiple Choice">Multiple Choice</option>
                            <option value='True / False'>True / False</option>
                        </select>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-end">
                    <button className="btn btn-success" onClick={postData} type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default NewQuestion;
