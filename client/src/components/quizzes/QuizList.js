import React, { useState, useEffect }from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import QuizRow from './QuizRow';
import Bin from './Bin';

//fetch all quizzes and loop
const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);
    // const [visibility, setVisibility] = useState(false);
    // const [favorite, setFavorite] = useState(false);
    useEffect(() => {
        getQuizzes()
//infinite re-render not caused here
    },[]);
//make the above [] blank to run useEffect only once when initial render
    function getQuizzes () {
        axios.get(`/api/quizzes`)
        .then(res => { 
            setQuizzes(res.data)    
            //infinite re-render caused here       
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
        <div className="mt-5">
            <div className="container pt-3">
                <div className="row">
                    <SearchBar />
                </div>
            </div>
            <div class="row mt-4">
                <h4 className="btn btn-primary btn-lg part-divider">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My quizzes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
            </div>
            <div className="container">
                <div className="table-responsive table-hover">
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
                                <QuizRow key={quiz._id} id={quiz._id} />
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Bin />
            <div className="container mt-5 mb-3 text-center" id="no_quiz">
                <h3 className="text-muted">There are all the quizzes you created.</h3>
                <h3 className="text-muted">Create a new one?</h3>
                <form>
                    {/* <button className="btn btn-primary btn-md" onClick={createQuiz}><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Create</button> */}
                </form>
            </div>
        </div>
    </div>
    )
}

export default QuizList;
