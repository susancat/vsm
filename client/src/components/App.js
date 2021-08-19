import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './Landing/LandingPage';
import Test from './Landing/Testimonial';
import Dashboard from './Dashboard';
import QuizList from './quizzes/QuizList';
import Quiz from './quizzes/Quiz';
import EditQuiz from './quizzes/EditQuiz';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact component={ LandingPage } />
        <Route path='/testamonials' component={ Test } />
        <Route path='/quizzes' exact component={ QuizList } />
        <Route path='/quizzes/:id' exact component={ Quiz } />
        <Route path='/quizzes/:id/edit' exact component={ EditQuiz } />
        <Route path='/dashboard' component={ Dashboard } />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
