import React,{ useState,useEffect } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';

import Header from '../Header';

const EditQuiz = props => {
    console.log(props)
    const {id} = props.location.state;
    //even it's an update, the initial value is not like quiz.title

    const initialQuizState = {
        title: "",
        category: "",
        grade: "",
        difficulty: "",
        description: "",
        visibility: false,
        favorite: false
    }

    const [originalQuiz, setQuiz] = useState(initialQuizState)
    const [title, setTitle] = useState(originalQuiz.title)
    function getQuiz(id) {
        axios.get(`http://localhost:5000/api/quizzes/${id}`)
        .then(res => {
            setQuiz(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getQuiz(id)
    },[id])

    // const handleInputChange = event => {
    //     const { name, value } = event.target;
    //     setQuiz({ ...quiz, [name]: value });
    //   };
//the problem is how to make title as quiz[title] and fetched by backend
    function updateQuiz(id) {
        const quiz = {
            title: title,
            category: originalQuiz.category,
            grade: originalQuiz.grade,
            difficulty: originalQuiz.difficulty,
            description: originalQuiz.description,
            visibility: originalQuiz.visibility,
            favorite: originalQuiz.favorite
        }
        axios.put(`http://localhost:5000/api/quizzes/${id}`, {
            quiz
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <Header />
            <form className="mt-5">
            <input type="text" placeholder={`${originalQuiz.title}`} onChange={(e) => setTitle(e.target.value)} />
                <button type="submit" onClick={updateQuiz}>Update</button>
            </form>
        </div>
    )
}

export default EditQuiz;
