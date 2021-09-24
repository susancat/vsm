import React, { useState,useEffect } from 'react';

import axios from 'axios';

const EditModal = (props) => {
    if(!props.show) {
        return null;
    }
    return(
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="btn-close" onClick={props.onClose}></button>
                </div>
                <div className="modal-body">
                    this is a modal,add more words
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={props.onClose}>Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal;