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

    const [quiz, setQuiz] = useState(initialQuizState)

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

    function updateQuiz(id) {
        const data = {
            title: quiz.title,
            category: quiz.category,
            grade: quiz.grade,
            difficulty: quiz.difficulty,
            description: quiz.description,
            visibility: quiz.visibility,
            favorite: quiz.favorite
        }
        axios.put(`http://localhost:5000/api/quizzes/${id}`, {
            data
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <Header />
            <form className="mt-5">
                {/* <input type="text" value={`${singleQuiz.title}`} onChange={(e) => setTitle(e.target.value)} /> */}
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditQuiz;
