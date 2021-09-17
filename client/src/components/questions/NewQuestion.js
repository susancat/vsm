import React, { useState, useEffect } from 'react'

import '../App.css';

const NewQuestion = () => {
    const [question, setQuestion] = useState("");
    useEffect(() => {

    })

    function postQuestion(){

    }
    
    return (
        <div className="card">
            <form>
                <div className="form-group card-header">
                    <input className="form-control" type="text" name="text" placeholder="Start to type your question" style={{ backgroundColor:'grey', fontSize:'4vw',color:'#fff' }}/>
                </div> 
                <div className="card-body">
                    <div className="row">
                        <input className="form-control me-2" type="text" name="option1" placeholder="answer 1 (the correct answer)" style={{width: '49%', backgroundColor: '#d9534f',fontSize:'2vw',color:'#fff'}} />
                        <input className="form-control" type="text" name="option2" placeholder="answer 2" style={{width: '49%',backgroundColor:'#5cb85c',fontSize:'2vw',color:'#fff'}}/>
                    </div>
                    <div className="row mt-1">
                        <input className="form-control me-2" type="text" name="option3" placeholder="answer 3" style={{width: '49%',backgroundColor: '#0275d8',fontSize:'2vw',color:'#fff'}}/>
                        <input className="form-control" type="text" name="option4" placeholder="answer 4" style={{width: '49%',backgroundColor: 'rgb(245, 213, 72)',fontSize:'2vw',color:'#fff'}}/>
                    </div>
                    <div className="row mt-1">
                        <select name="type" id="" className="form-control">
                            <option selected value="Multiple Choice">Multiple Choice</option>
                            <option value="True / False">True / False</option>
                        </select>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-end">
                    <button className="btn btn-success" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default NewQuestion;
