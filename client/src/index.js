import 'bootstrap5/src/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import LandingPage from './components/Landing/LandingPage';
import Test from './components/Landing/Testimonial';
import Dashboard from './components/Dashboard';
import QuizList from './components/quizzes/QuizList';
import Quiz from './components/quizzes/Quiz';
import EditQuiz from './components/quizzes/EditQuiz';
import QuestionList from './components/questions/QuestionList';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path='/' exact component={ LandingPage } />
      <Route path='/testamonials' component={ Test } />
      <Route path='/quizzes' exact component={ QuizList } />
      <Route path='/quizzes/:id' exact component={ Quiz } />
      <Route path='/quizzes/:id/edit' exact component={ EditQuiz } />
      <Route path='/quizzes/:id/questions' exact component={ QuestionList } />
      <Route path='/dashboard' component={ Dashboard } />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
