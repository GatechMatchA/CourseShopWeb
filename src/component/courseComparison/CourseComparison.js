import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import CourseCompItem from './CourseCompItem';
import { clearCourseCompare } from '../../actions/course';
import { clearCurrentProf } from '../../actions/professor';

import SectionComparison from './SectionComparison';
import ProfessorDetail from './ProfessorDetail';

const CourseComparison = ({
  course: { loading, selectedCourses },
  clearCourseCompare,
  clearCurrentProf,
}) => {
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link
        to='/courses'
        className='btn'
        onClick={(e) => {
          clearCourseCompare();
          clearCurrentProf();
        }}
      >
        Back To All Courses
      </Link>
      <Link to='/calendar' className='btn'>
        Go to calendar
      </Link>
      <h1 className='large text-primary'>Course Comparison Page</h1>
      <p className='lead'>
        <i className='fas fa-book' /> Compare your courses
      </p>
      <div className='courseCompLayout'>
        <div className='courseComparison'>
          <h3 className='small text-primary'>Choose Courses</h3>
          {selectedCourses.map((course) => (
            <CourseCompItem key={course.id} courseItem={course} />
          ))}
        </div>
        <div>
          <h3 className='small text-primary'>Choose Sections</h3>
          <SectionComparison />
        </div>
        <div className='courseComparison'>
          <h3 className='small text-primary'>Professor Details</h3>
          <ProfessorDetail />
        </div>
      </div>
    </Fragment>
  );
};

CourseComparison.propTypes = {
  //   getCourses: PropTypes.func.isRequired,
  //   course: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  course: state.course,
});

export default connect(mapStateToProps, {
  clearCourseCompare,
  clearCurrentProf,
})(CourseComparison);
