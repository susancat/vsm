import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    const [user, setUser] = useState("");
    useEffect(() => {
        getUser()
    });
    function getUser(){
        axios('http://localhost:5000/api/current_user')
        .then(async response => {
            console.log(response)
            setUser(response.data)
        }).catch(error => {
            console.log(error)
        })
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">   
            <Link className="navbar-brand" style={{width:'15%', minWidth: '6rem'}} to="/">Home</Link>
            <button className="navbar-toggler ml-auto mt-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                { user === "" ?
                <>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/quizzes"><i class="fa fa-tasks" aria-hidden="true"></i> Quizzes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/courses"><i className="fas fa-users"></i> Classes</a>
                   a </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/games/all"><i className="fas fa-play"></i> Games</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/gameresults"><i className="fas fa-chart-line"></i> Reports</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard"><i className="fas fa-school"></i> Dashboard</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="mb-1">
                        <a className="btn mr-1" id="publicQuiz" style={{backgroundColor: 'rgba(24, 73, 209, 0.808)'}} href="/quizbank"><i className="fa fa-book" aria-hidden="true"></i> Public Quizzes</a>
                    </li>
                    <li className="mb-1">
                        <form className="form-inline mr-auto">
                            <a className="btn btn-success" href="/quizzes/new" role="button"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Create</a>
                        </form>
                    </li>
                </ul> 
                </> : <></>
                }
                <ul className="nav navbar-nav ml-auto" id="navbar_thing" style={{paddingLeft: '5%'}}>
                    { user === "" ?
                    <>
                    <li>
                        <a href="/login" className="text-decoration-none" id="navbar_stuff"><i className="fa fa-sign-in" aria-hidden="true"></i> &nbsp;&nbsp;Login&nbsp;&nbsp;</a>
                    </li>
                    <li >
                        <a href="/register" className="text-decoration-none" id="navbar_stuff"><i className="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Sign Up&nbsp;&nbsp;</a>
                    </li>
                    </> :
                    <>
                    <li>
                        <Link to="#" className="text-decoration-none" id="navbar_stuff" ><i className="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Signed in as&nbsp;&nbsp; {user.username}&nbsp;&nbsp;</Link></li>
                    <li>
                        <a href="/api/logout" className="text-decoration-none" id="navbar_stuff"><i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;&nbsp;Logout&nbsp;&nbsp;</a>
                    </li>
                    </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Header;