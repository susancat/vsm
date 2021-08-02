import React from 'react';
import test from '../../img/test.jpg';
import test1 from '../../img/teacher.jpg';
import test2 from '../../img/parents.jpg';
import test3 from '../../img/homeschool.jpg';

import { Link } from 'react-router-dom';
import LandingPageHeader from './LandingPageHeader';

const Test = () => {
    return(
        <div>
            <LandingPageHeader />
            <div className="container-flex">
                <div className="jumbotron container-fluid mb-0" style={{ backgroundImage: `url(${test})`, backgroundSize:'100%', backgroundPosition: 'center', backgroundAttachment: 'fixed'}} >
                <h1 className="display-4 text-center text-light mt-5" style={{ fontWeight:'800'}} >Our Testimonials</h1>
                <h3 className="display-5 text-center text-light mt-5"  style={{ fontWeight:'800'}}>Feedback from users just like you</h3>
                <div className="row mt-5 mb-5 w-50 d-flex justify-content-between ml-2">
                    <div className="col-lg-4 col-sm-12 mt-3 text-center">
                        <Link to="#teachers" id="teachers" style={{ textDecoration: 'none' }}>
                            <div className="d-inline-flex border border-light rounded" style={{ borderWidth: '3px' }}>
                                <h3 className="text-center pl-2 pr-2 text-light"  style={{ fontWeight:'800'}}>Teachers</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-sm-12 mt-3 text-center">
                        <Link to="#parents" style={{ textDecoration: 'none' }}>
                            <div className="d-inline-flex border border-light rounded" style={{ borderWidth: '3px' }}>
                                <h3 className="text-center text-light pl-2 pr-2 text-light" style={{ fontWeight:'800'}}>Parents</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-sm-12 mt-3 text-center">
                        <Link to="#homeschoolers" style={{ textDecoration: 'none' }}>
                            <div className="d-inline-flex border border-light rounded" style={{ textAlign: 'center', borderWidth: '3px' }}>
                                <h3 className="text-center text-light pl-2 pr-2 text-light" style={{ fontWeight:'800'}}>Homeschoolers</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    <div class="container-flex" id="teachers">
        <div className="jumbotron container-fluid mb-0" style={{ backgroundImage: `url(${test1})`, backgroundSize:'100%', backgroundPosition: 'center', backgroundAttachment: 'fixed'}} >
            <div className="container">
                <h1 className="display-4 text-center text-light mt-5" style={{ fontWeight:'800'}} >Teachers</h1>
                <h3 className="display-5 text-left text-light mt-5" style={{ fontWeight:'800'}}>Hear from teachers who use our platform for their lessons</h3>
                <Link to="#collapseContent" role="button" aria-expanded="false" aria-controls="collapseContent" className="btn btn-primary mt-5 text-light" data-toggle="collapse" style={{ fontWeight:'800', background: 'none', borderWidth: '3px', borderColor:'white', outline: 'none' }} >
                    Read More
                </Link>
                <div className="collapse p-0" id="collapseContent">
                    <h1 className="text-light mt-5 mr-1"><strong  style={{ fontWeight:'800'}}>Jane Doe</strong>, 25, Hong Kong</h1>
                    <h3 className="text-light mt-5 mr-5" >I've been using Virtual School Maker for my classes in Hong Kong ever since Covid-19 hit It's been really helpful during the periods of online learning. If you really need a platform to share meaningful games and monitor your students' progress then this platform is super helpful because not only is it engaging, but also really easy to maintain.
                    </h3>
                </div>
            </div>
        </div>
    </div>

    {/* //------ parents----------------// */}
    <div className="container-flex" id="parents">
        <div className="jumbotron container-fluid mb-0" style={{ backgroundImage: `url(${test2})`, backgroundSize:'100%', backgroundPosition: 'center', backgroundAttachment: 'fixed'}} >
            <div className="container">
                <h1 className="display-4 text-center text-light mt-5" style={{ fontWeight:'800'}}> Parents</h1>
                <h3 className="display-5 text-right text-light mt-5" style={{ fontWeight:'800'}}>Stories from parents who use the Virtual School Maker to both educate and entertain their children.</h3>
                <div className="text-right">
                    <Link to="#parentCollapse" role="button" aria-expanded="false" aria-controls="parentCollapse" className="btn btn-primary mt-5 text-light" data-toggle="collapse" style={{ fontWeight:'800', background: 'none', borderWidth: '3px', borderColor:'white', outline: 'none' }}>
                        Read More
                    </Link>
                </div>

                <div className="collapse" style={{ direction: 'rtl' }} id="parentCollapse">
                        <h1 className="text-light text-right mt-5"><strong style={{ fontWeight:'800'}}>Bill Gates</strong>, 65, USA</h1>
                        <h3 className="text-light text-right mt-5 mr-1">I've been using Virtual School Maker for children ever since Covid-19 hit. It's been really helpful during the periods of online learning. If you really need a platform to share meaningful games and monitor your child's progress then this platform is super helpful because not only is it engaging, but also really easy to maintain
                        </h3>
                </div>
            </div>
        </div>
    </div>

    {/* // Homeschooler */}
    <div className="container-flex" id="homeschoolers">
        <div className="jumbotron container-fluid mb-0" style={{ backgroundImage: `url(${test3})`, backgroundSize:'100%', backgroundPosition: 'center', backgroundAttachment: 'fixed'}} >   
            <div className="container">
                <h1 className="text-left text-dark mt-5" style={{ fontWeight:'800'}}>Homeschoolers</h1>
                <h3 className="display-5 text-left text-dark mt-5 col-lg-6" style={{ fontWeight:'800', width: '80%'}}>Hear from homeschoolers who teach their children with our unique platform</h3>
                <Link to="#homeCollapse" role="button" aria-expanded="false" aria-controls="homeCollapse" className="btn btn-primary mt-5 text-dark" data-toggle="collapse" style={{ fontWeight:'800', background: 'none', borderWidth: '3px', borderColor:'white', outline: 'none' }}>
                    Read More
                </Link>

                <div className="collapse" id="homeCollapse">
                    <h1 className="text-dark mt-5" style={{ width:' 80%'}} ><strong class={{ fontWeight:'800'}}>Paul McCartney</strong>, 78, UK</h1>
                    <h3 className="text-dark mt-5 mr-1">I've been using Virtual School Maker for my son's education ever since Covid-19 hit It's been really helpful during the periods of online learning. If you really need a platform to share meaningful games and monitor your child' progress then this platform is super helpful because not only is it engaging, but also really  easy to maintain.</h3>
                </div>
            </div>
        </div>
    </div>  
        </div>
    )
}

export default Test;