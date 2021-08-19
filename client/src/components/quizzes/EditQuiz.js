import React,{ useState,useEffect } from 'react'
import axios from 'axios';

const EditQuiz = props => {
    //even it's an update, the initial value is not like quiz.title
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [grade, setGrade] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [description, setDescription] = useState("");
    const [visibility, setVisibility] = useState(false);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        
    })

    function updateQuiz(id) {
        axios.put(`http://localhost:5000/api/quizzes/${id}`, {

        })
    }
    return (
    <div className="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"><strong>Edit Quiz</strong></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div className="form-group mb-2 ml-1">
                        <label for="title"><strong>Title</strong></label>
                        <input id="title" className="form-control" type="text" name="quiz[title]" value="" placeholder="100" />
                    </div>
                    <div className="form-group row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label for="category"><strong>Category</strong></label>
                                <select id="category" className="form-control" name="quiz[category]">
                                    <option selected value="">{ quiz.category }</option>
                                    <option value="Animal">Animal</option>
                                    <option value="Arts">Arts</option>
                                    <option value="Comics">Comics</option>
                                    <option value="Food and Drink">Food and Drink</option>
                                    <option value="Geography">Geography</option>
                                    <option value="History">History</option>
                                    <option value="Lifestyle and Pop Culture">Lifestyle and Pop Culture</option>
                                    <option value="Literacy">Literacy</option>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Music">Music</option>
                                    <option value="Science">Science</option>
                                    <option value="World">World</option>
                                    <option value="Other">Other</option>   
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="grade"><strong>Grade</strong></label>
                                <select id="grade" className="form-control" name="quiz[grade]">
                                    <option selected value="">{quiz.grade}</option>
                                    <option>K1</option>
                                    <option>K2</option>
                                    <option>K3</option>
                                    <option>K4</option>
                                    <option>K5</option>
                                    <option>K6</option>
                                    <option>K7</option>
                                    <option>K8</option>
                                    <option>K9</option>
                                    <option>K10</option>
                                    <option>K11</option>
                                    <option>K12</option>                       
                                    <option>Other</option>      
                                </select>
                            </div>
                        </div>
                        <div className="form-group col-md-7">
                            <label for="description"><strong>Description</strong></label>
                            <textarea id="description" rows="5" class="form-control" type="text" name="quiz[description]" placeholder="300">{quiz.description}</textarea>
                        </div> 
                        </div> 
                    <div className="form-group row">
                <div className="col-md-5">
                    <label><strong>Visibility</strong></label>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="quiz[public]" value="false" id="private" />
                            <label className="form-check-label" for="private">Private</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="quiz[public]" value="true" id="public" />
                            <label className="form-check-label" for="public">Public</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="form-group">
                        <label for="game"><strong>Switch Game</strong></label>
                        <select className="form-control" name="" id="">
                            <option value="lethalchoice" checked>Lethal Choice</option>
                            <option value="quizrun">Quiz Run</option>
                        </select>
                    </div>
                </div>
            </div>
            <label for=""><strong>Game Advanced Setting</strong></label>
            <div className="form-group row">
                <div className="form-inline col-md-4">      
                    <label for="avgScore">&nbsp;&nbsp;Scores: &nbsp;&nbsp;</label>
                    <input id="avgScore" type="number" min="250" step="250" name="question[scores]" value="250" style="width: 60%; height: 2.4rem" />
                </div>
                <div class="form-inline col-md-4">
                    <label for="avgTimer">&nbsp;&nbsp;Time: &nbsp;&nbsp;</label>
                    <input id="avgTimer" type="number" min="30" step="30" name="question[timer]" value="30" style="width: 60%; height: 2.4rem" />&nbsp;s
                </div>
                <div className="form-inline col-md-4">
                    <label for="avgCoins">&nbsp;&nbsp;Coins: &nbsp;&nbsp;</label>
                    <input id="avgCoins" type="number" min="15" step="15" name="question[coins]" value="15" style="width: 60%; height: 2.4rem" />
                </div>
            </div>
            <div className="modal-footer">
                <div className="mx-auto">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">&nbsp;&nbsp;&nbsp;&nbsp;Cancel&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <button type="submit" className="btn btn-primary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
            </div>
            </form> 
        </div>
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"><strong>Game Log</strong></h5>
            <a href="#" className="text-muted mx-auto">&nbsp;&nbsp;Go to game&nbsp;&nbsp;<i class="fas fa-link"></i></a>
        </div>
        <div className="modal-body">
             {/* quiz.games.length > 0 ?  */}
           { quiz.games.map(game => { 
         const leftHour = (game.validDeadline - Date.now()) / 86400 / 24;
               return(

                    <div className="row d-flex justify-content-between">
                        <h6 className="col-md-4 mt-2"><strong>End in {Math.floor(leftHour)} hours</strong></h6>
                        <button className="btn btn-danger mb-1 mr-auto">LIVE</button>
                        <a className="btn btn-secondary mb-1 ml-auto mr-1">PIN: { game.pin }</a>
                        <form>
                            <button type="submit" className="btn btn-success ml-auto mr-1">Start</button>
                        </form>
                    </div> 
               )
            })
           } 
        </div> 
        <div className="modal-footer justify-content-between">
            <div className="row">
                <h5><strong>Completed</strong></h5>
                <h5>View Report <i className="fas fa-long-arrow-alt-right"></i></h5>
            </div>
        </div>
    </div>
    </div>
</div>
    )
}

export default EditQuiz;
