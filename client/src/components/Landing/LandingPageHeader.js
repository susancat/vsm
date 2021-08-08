import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LandingPageHeader = () => {
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

            <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li key={1} className="nav-item">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li key={2} className="nav-item">
                        <Link to="/testamonials" className="nav-link">Testamonials</Link>
                    </li>
                    <li key={3} className="nav-item">
                        <Link to="/rblxgames" className="nav-link">Games</Link>
                    </li>
                    <li key={4} className="nav-item">
                        { user === "" ? 
                        <a href='/auth/google' className="nav-link btn btn-xs btn-danger" style={{borderRadius: '20px'}}>Sign In</a> :
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        }                 
                    </li> 
                    <li key={5} className="nav-item">
                        { user === "" ?
                        <a href="/register" className="nav-link btn btn-xs btn-light ml-1" style={{borderRadius: '20px'}}>Sign Up</a> :
                        <a href="/api/logout" className="nav-link"><i class="fa fa-sign-out" aria-hidden="true"></i>&nbsp;&nbsp;Logout&nbsp;&nbsp;</a>    
                    }
                    </li>      
                </ul>
            </div>
        </nav>
    )
}

export default LandingPageHeader;