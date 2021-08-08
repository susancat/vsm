import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './Landing/LandingPage';
import Test from './Landing/Testimonial';
import Dashboard from './Dashboard';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact component={ LandingPage } />
        <Route path='/testamonials' component={ Test } />
        <Route path='/dashboard' component={ Dashboard } />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
