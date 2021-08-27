import React from 'react'

const NewQuestion = () => {
    return (
        <form>
            <div className="form-group">
                <input className="form-control" type="text" name="text" placeholder="Start to type your question" />
            </div> 
            <div className="form-inline">
                <input className="form-control" type="text" name="option1" placeholder="answer 1 (the correct answer)" />
                <input className="form-control" type="text" name="option2" placeholder="answer 2" />
            </div>
            <div className="form-inline">
                <input className="form-control" type="text" name="option3" placeholder="answer 3" />
                <input className="form-control" type="text" name="option4" placeholder="answer 4" />
            </div>
            <div className="form-group">
                <select name="type" id="" className="form-control">
                    <option selected value="Multiple Choice">Multiple Choice</option>
                    <option value="True / False">True / False</option>
                </select>
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="submit">Save</button>
            </div>
        </form>
    )
}

export default NewQuestion;
