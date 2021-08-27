import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer font-small pt-4 pb-0 pt-0 mb-0 mt-0 bg-primary">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left mt-3 pb-3">
  
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Designer</h6>
                        <Link to="https://susancat.github.io/" target="_blank" style={{ textDecoration: 'none'}}>
                            <p className="text-light">Irene Zhang</p>
                        </Link>
                    </div>
                    <hr className="w-100 clearfix d-md-none" />

                    <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p><i className="fas fa-home mr-2"></i>&nbsp;Hong Kong</p>
                        <p><i className="fas fa-envelope mr-2"></i>&nbsp;zhangjiayu71@hotmail.com</p>
                    </div>
  
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-xl-12 mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow Me&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link style={{color: '#fff', textDecoration: 'none', fontSize: '2rem' }} to="#" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;</Link>
                        <Link style={{color: '#fff', textDecoration: 'none', fontSize: '2rem' }}  to="#" target="_blank"><i className="fa fa-youtube-square" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;</Link>
                        <Link style={{color: '#fff', textDecoration: 'none', fontSize: '2rem' }}  to="#" target="_blank"><i className="fa fa-snapchat-square" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;</Link>
                        <Link style={{color: '#fff', textDecoration: 'none', fontSize: '2rem' }}  to="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                    </h6>
                </div>
                <hr />
            </div>
            <div className="row d-flex align-items-center justify-content-between">
                <p className="text-center text-md-left">&copy;2021 Designed by Irene Zhang. All Rights Reserved.
                </p>
                <p>version: 1.0.0</p>
            </div> 
        </div>
    </footer>
    )
}

export default Footer;