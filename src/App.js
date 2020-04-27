import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Alert from './component/layout/Alert';
import Courses from './component/courseSelection/Courses';
import CourseComparison from './component/courseComparison/CourseComparison';
import Review from './component/addReview/Review';
import Calendar from './component/calendar/Calendar';

//import Redux surrond the whole app with Provider
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/courses' component={Courses} />
            <Route
              exact
              path='/coursecomparison'
              component={CourseComparison}
            />
            {/* <Route exact path='/courses/:id' component={Course} />
            <Route
              exact
              path='/courses/:id/professors/:profId'
              component={Professor}
            /> */}
            <Route exact path='/addreview' component={Review} />
            <Route exact path='/calendar' component={Calendar} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
