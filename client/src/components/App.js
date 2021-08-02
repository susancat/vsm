import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './Landing/LandingPage';
import Test from './Landing/Testimonial';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact component={ LandingPage } />
        <Route path='/testamonials' component={ Test } />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
