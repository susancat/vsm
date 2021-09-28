import React, { useState,useEffect } from 'react';

import axios from 'axios';

const EditModal = (props) => {
    const { id } = props;
    const initialQuizState = {
        title: "",
        category: "",
        difficulty: "",
        description: "",
        visibility: false,
        favorite: false
    }
    const [quiz, setQuiz] = useState(initialQuizState);
    const [title, setTitle] = useState(quiz.title);
    const [category, setCategory] = useState(quiz.category);
    const [description, setDescription] = useState(quiz.description);
    const [difficulty, setDifficulty] = useState(quiz.difficulty);
    const [visibility, setVisibility] = useState(quiz.visibility);
    const [favorite, setFavorite] = useState(quiz.favorite);
    const [updated, setUpdated] = useState(false);
    
    useEffect(() => {
        getQuiz(id)
    },[id])

    if(!props.show) {
        return null;
    }

    function getQuiz(id) {
        axios.get(`http://localhost:5000/api/quizzes/${id}`)
        .then(res => {
            setQuiz(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const updateQuiz = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            category: category,
            difficulty: difficulty,
            description: description,
            visibility: visibility,
            favorite: favorite
        }
        axios.put(`http://localhost:5000/api/quizzes/${id}`, {
            data
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content" onClick={e => e.stopPropagation()} style={{width:'40vw'}}>
                <div className="modal-header">
                    <h5 className="modal-title">Edit quiz</h5>
                    <button type="button" className="btn-close" onClick={props.onClose}></button>
                </div>
                <div className="modal-body">
                <form className="mx-auto">
                        <div className="form-group mb-1">
                            <input className="form-control" type="text" placeholder={`${quiz.title}`} onChange={(e) => setTitle(e.target.value)} required/>
                        </div>
                        <div className="form-group mb-1">
                            <input className="form-control" type="text" placeholder={`${quiz.category}`} onChange={(e) => setCategory(e.target.value)} />
                        </div>
                        <div className="form-group mb-1">
                            <select className="form-control" id="" onChange={(e) => setDifficulty(e.target.value)}> 
                                <option value={`${quiz.difficulty}`}>{quiz.difficulty}</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                        <div className="form-group mb-1">
                            <textarea row="5" className="form-control" onChange={(e) => setDescription(e.target.value)}>{quiz.description}</textarea>
                        </div>
                        <div className="modal-footer">
                <button className="btn btn-primary" type="submit" onClick={updateQuiz}>Update</button>
                    <button type="button" className="btn btn-secondary" onClick={props.onClose}>Close</button>
                </div>
                    </form>
                </div>

                </div>
            </div>
        </div>
    )
}

export default EditModal;