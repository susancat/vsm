import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import home1 from '../../img/home_1x.jpg';
import home2 from '../../img/welcome.jpg';

const LandingPics = () => {
    return(
        <div className="main mt-0 pt-0">
            <div className="container-fluid first_jumbotron mb-5" style={{backgroundImage:  `url(${home1})` }}>
                <h1 className="text-center text-white mb-2" style={{ paddingTop: '10%', fontSize:' 3.5vw', fontWeight:'800' }}>
                    Make Learning Happen WHEREVER You Are!
                </h1>
                <div className="d-inline-flex border border-light rounded mt-5" id="wrapper" style={{ borderWidth: '.5vw!important' }}>
                <Link to="#anchor" className="text-decoration-none" id="scroll_button">
                    <h3 className="text-white font-weight-bold ml-1 mr-1" style={{ fontSize: '2vw' }}>How it works</h3> 
                </Link>
                </div>

                <div className="mt-5" id="down_arrow">
                    <Link to="#anchor" style={{ textDecoration: 'none', color: 'white', fontSize: '1vw' }}>
                    </Link>
                </div>
                <span className="anchor" id="anchor" style={{ position: 'relative', top: '-100px' }}></span>
            </div>

            <div className="container-fluid p-0 m-0">
                <div className="jumbotron p-0" style={{ textAlign: 'center'}} >
                    <div className="row" style={{ backgroundColor: 'rgba(197, 18, 18, 0.952)' }}>
                        <div className="col-lg-6 col-md-12">
                            <div className="d-inline-flex mb-4 mt-4 justify-content-center">
                                <img className='' style={{ width: '50%', padding: '3%',border: '4px solid #fff' }} src="" alt="" />
                            </div>
                            <h3 className="text-light mb-3" style={{ fontSize: '2vw'}}>Create game-based learning easily with </h3>
                            <h2 className="text-light mb-3" style={{ fontSize: '2.5vw'}}>Virtual School Maker.</h2>
                            <h3 className="text-light mt-3 mb-3" style={{ fontSize: '2vw'}}>Motivate students to learn in their favorite </h3>
                            <h3 className="text-light mb-3" style={{ fontSize: '2vw'}}>gaming platforms such as Roblox.</h3>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/playlist?list=PLM-gvwt_fWyZgm1XBj8kBwvttWB2QxN9Z&rel=0" title="YouTube video" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ backgroundColor:'#fff' }}>
                        <div className="mt-3 col-lg-6 col-md-12">
                            <h3 className="text-dark mx-3" style={{ fontSize: '2vw' }}>Visit our demo virtual school in <span style={{ color:'rgba(197, 18, 18, 0.952)' }}>Roblox</span> now!</h3>
                            <h3 className="mx-3" style={{ color: 'rgba(197, 18, 18, 0.952)',fontSize: '1.8vw' }}>Register a new Roblox account if you don’t have one.</h3>
                        </div>
                         <div class="col-lg-6 col-md-12 d-flex justify-content-center">
                            <Link class="btn btn-lg btn-danger btn__demo align-self-center" to="https://www.roblox.com/games/5887877906/Beta-Virtual-School?refPageId=9d58ded7-07de-4e37-af2e-e93417126b94" target="_blank">Visit demo school now!</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ backgroundColor: 'white'}} >
                <div className="jumbotron" style={{ background: 'none' }}>
                    <h1 className="text-center text-black text-capitalize" style={{ fontSize:' 3.5vw', fontWeight: '800' }}>Countless Different Games Help Your Students to Learn!</h1>
                    <div className="row">
                        <div className="mt-3 col-sm ml-3 pl-0 pr-0 text-center border border-muted">
                            <img className="pl-0 pr-0 ml-0 mr-0" src="" alt="" />
                            <h3 className="text-center text-black mt-3" style={{ fontWeight: '800' }}>Quiz Run</h3>
                            <h4 className="text-center pt-3 font-italic text-dark">Find your path with <strong>what you've learnt!</strong>
                            </h4>
                            <Link to="/rblxgames" style={{ textDecoration: 'none' }}>
                                <div className="d-inline-flex border border-dark rounded mb-4 mt-2">
                                    <h3 className="text-dark pl-2 pr-2" style={{ fontSize: '1.5vw',fontWeight: '800' }}>Learn More</h3>
                                </div>
                            </Link>
                        </div>
                    
                        <div className="mt-3 col-sm ml-3 text-center pl-0 pr-0 border border-muted">
                            <img src="" alt="" />
                            <h3 className="text-center text-black mt-3" style={{ fontWeight: '800' }}>Lethal Choice</h3>
                            <h4 className="text-center pt-3 font-italic text-dark">Play various fun and engaging <strong> minigames!</strong>
                            </h4>
                            <Link to="/rblxgames" style={{ textDecoration: 'none'}}>
                                <div className="d-inline-flex border border-dark rounded mb-4 mt-2">
                                    <h3 className="text-dark pl-2 pr-2" style={{ fontSize: '1.5vw',fontWeight: '800' }}>Learn More</h3>
                                </div>
                            </Link>
                        </div>
                        <div className= "mt-3 col-sm ml-3 text-center pl-0 pr-0 border border-muted">
                            <img src="" alt="" />
                            <h3 className="text-center text-black mt-3" style={{ fontWeight: '800' }}>Physics Playground</h3>
                            <h4 class="text-center pt-3 font-italic text-dark">Battle other teams using <strong> physics and your creativity!</strong></h4>
                            <Link to="/rblxgames" style={{ textDecoration: 'none'}}>
                                <div className="d-inline-flex border border-dark rounded mb-4 mt-2">
                                    <h3 className="text-dark pl-2 pr-2" style={{ fontSize: '1.5vw',fontWeight: '800' }}>Learn More</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-flex">
                <div className="jumbotron mb-0" style={{ backgroundColor:' #565962' }}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li key={1} data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li key={2} data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li key={3} data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container mb-5">
                                <h1 className="text-center text-white font-italic" style={{ fontSize: '3vw',fontWeight: '800' }}>Create, Manage, And Share Questions</h1>
                                <img src="#" className="w-100 mt-5" alt="" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container mb-5">
                                <h1 className="text-center text-white font-italic" style={{ fontSize: '3vw',fontWeight: '800' }} >Assess Learning Outcomes</h1>
                                <img src="viewReport.png" className="w-100 mt-5" alt="" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container mb-5">
                                <h1 className="text-center text-white font-italic" style={{ fontSize: '3vw',fontWeight: '800' }}>Encourage Students with Rewards</h1>
                                <img src="/deployClass.png" className="w-100 mt-5" alt="" />
                            </div>
                        </div>
                    </div>
                    <Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </Link>
                    <Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </Link>
                    </div>
                </div>
            </div>

            <div className="jumbotron container-fluid w-100 mb-0" style={{ textAlign: 'center',backgroundImage: `url(${home2})`, backgroundPosition: 'center', backgroundSize: '100% 100%' }}>
                <h2 className="text-center text-light" style={{ fontSize: '3vw', marginTop: '15%',fontWeight: '800' }}>Choose a More Advanced Online Education Solution</h2>
                <h2 className="text-center text-light" style={{ fontSize: '3vw', marginTop: '5%', fontWeight: '800' }}>A Perfect Learning Tool For the Modern Era</h2>
                 <Link to="https://www.virtualschoolmaker.com/register" style={{ textDecoration: 'none'}} >
                    <div className="d-inline-flex border border-light rounded" style={{ borderWidth: '5vw!important', marginTop: '10%', marginBottom: '15%' }}>
                        <h3 className="pl-2 pr-2" style={{ fontSize: '3vw',fontWeight:'800' }}>Sign Up Now!</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default LandingPics;