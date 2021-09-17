import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer font-small pt-2 pb-0 mb-0 mt-0 bg-primary fixed-bottom">
            <div className="row d-flex align-items-center justify-content-between">
                <div className="col-lg-6">
                    <h6 className="text-uppercase font-weight-bold">Follow Me&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link style={{color: '#fff', textDecoration: 'none', fontSize: '2rem' }} to="#" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;</Link>
                        <Link style={{color: '#fff', textDecoration: 'none', fontSize: '2rem' }}  to="#" target="_blank"><i className="fa fa-youtube-square" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;</Link>
                        <Link style={{color: '#fff', textDecoration: 'none', fontSize: '2rem' }}  to="#" target="_blank"><i className="fa fa-snapchat-square" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;</Link>
                        <Link style={{color: '#fff', textDecoration: 'none', fontSize: '2rem' }}  to="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                    </h6>
                </div>
                <div className="col-lg-6">
                    <p className="text-center text-md-left">&copy;2021 Designed by Irene Zhang. All Rights Reserved. version: 1.0.0
                    </p>
                </div>
            </div> 
        </footer>
    )
}

export default Footer;