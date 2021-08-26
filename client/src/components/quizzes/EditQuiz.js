import React,{ useState,useEffect } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';

import Header from '../Header';

const EditQuiz = props => {
    console.log(props)
    const {id} = props.location.state;
    console.log("this is id: "+ id)
    //even it's an update, the initial value is not like quiz.title

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

    useEffect(() => {
        getQuiz(id)
    },[id])

    function getQuiz(id) {
        axios.get(`http://localhost:5000/api/quizzes/${id}`)
        .then(res => {
            setQuiz(res.data)
        }).catch(err => {
            console.log(err)
        })
    }


    // const handleInputChange = event => {
    //     const { name, value } = event.target;
    //     setQuiz({ ...quiz, [name]: value });
    //   };
//the problem is how to make title as quiz[title] and fetched by backend
    const updateQuiz = () => {
        // e.preventDefault();
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
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container">
            <Header />
            <h3 className="mt-5 mb-2 text-center">Edit quiz</h3>
            <form className="mx-auto" style={{width:"50%;"}}>
                <div className="form-group mb-1">
                    <input className="form-control" type="text" placeholder={`${quiz.title}`} onChange={(e) => setTitle(e.target.value)} />
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
                {/* <div className="form-inline mb-1">
                    <input className="form-control" type="radio" name={`${quiz.visibility}`} value="true" onChange={(e) => setCategory(e.target.value)} />
                </div> */}
                <div className="form-group mb-1">
                    <button className="btn btn-primary" type="submit" onClick={updateQuiz}>Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditQuiz;