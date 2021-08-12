import React, { useState, useEffect }from 'react';
import axios from 'axios';

import Header from '../Header';
import SearchBar from './SearchBar';
import Bin from './Bin';

//fetch all quizzes and loop
const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        getQuizzes()
    },[]);
//make the above [] blank to run useEffect only once when initial render
    function getQuizzes(){
        axios.get('http://localhost:3001/api/quizzes')
        .then(async res => {
            console.log(res.data)
            setQuizzes(res.data)
        }).catch(err => {
            console.log(err);
        })
    }
    //try use another useEffect to handle form change
    return (
        <div>
        <Header />
        <div className="mt-5">
            <div className="container pt-3">
                <div className="row">
                    <SearchBar />
                </div>
            </div>
            <div class="row mt-4">
                <h4 class="btn btn-primary btn-lg part-divider">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My games&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
            </div>
            <div className="container">
                <div className="table-responsive">
                    <table className="table">
                        <thead className="text-muted">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">  </th>
                                <th scope="col">  </th>
                                <th scope="col">Question</th>
                                <th scope="col">Grade</th>
                                <th scope="col">Category</th>
                                <th scope="col">Last Modify</th>
                                <th scope="col">  </th>
                            </tr>
                        </thead>
                        <tbody>
                        { quizzes.map(quiz => {
                            return(
                                <tr className='clickable-row'>
                                    <td>{quiz.title}</td>
                                    <td>
                                        { quiz.favorite && quiz.favorite === true ? 
                                            <i class="fa fa-star" aria-hidden="true"></i> : <i class="far fa-star"></i>
                                        }
                                    </td>
                                    <td>
                                        { quiz.public === true ?
                                            <i class="fa fa-eye" aria-hidden="true"></i> : <i class="fa fa-eye-slash" aria-hidden="true"></i>
                                        }
                                    </td>
                                    <td>{quiz.questions.length}</td>
                                    <td>{quiz.grade}</td>
                                    <td>{quiz.category}</td>
                                    <td>{quiz.lastUpdated}</td>
                                    <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Bin />
            <div class="container mt-5 mb-3 text-center" id="no_quiz">
                <h3 className="text-muted">There are all the quizzes you created.</h3>
                <h3 className="text-muted">Create a new one?</h3>
                <button className="btn btn-primary btn-md"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Create</button>
            </div>
        </div>
    </div>
    )
}

export default QuizList;
