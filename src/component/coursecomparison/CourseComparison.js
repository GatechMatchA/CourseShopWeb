import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import CourseCompItem from './CourseCompItem';

const CourseComparison = ({ course: { loading, selectedCourses } }) => {
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/courses' className='btn'>
        Back To All Courses
      </Link>
      <h1 className='large text-primary'>Course Comparison Page</h1>
      <p className='lead'>
        <i className='fas fa-book' /> Compare your courses
      </p>

      <div className='courseComparison'>
        {selectedCourses.map(course => (
          <CourseCompItem key={course._id} courseItem={course} />
        ))}
      </div>
    </Fragment>
  );
};

CourseComparison.propTypes = {
  getCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  selectedCourseNum: PropTypes.number.isRequired,
  selectedCourses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(mapStateToProps, {})(CourseComparison);
