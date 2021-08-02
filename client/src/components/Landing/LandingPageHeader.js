import React from 'react';
import { Link } from 'react-router-dom';
const LandingPageHeader = () => {
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
                        <Link to="/login" className="nav-link btn btn-xs btn-danger" style={{borderRadius: '20px'}}>Sign In</Link>
                    </li>       
                </ul>
            </div>
        </nav>
    )
}

export default LandingPageHeader;