import React from 'react';

import axios from 'axios';

const DeleteBtn = (props) => {
    const { id } = props;

    function deleteQuiz(id) {
        axios.delete(`/api/quizzes/${id}`)
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <button className="btn btn-xs btn-danger" style={{width: '30%'}} onClick={() => deleteQuiz(id)}>Delete</button>
    )
}

export default DeleteBtn;