import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCourses } from '../../actions/course';
import CourseItem from './CourseItem';
import { Link } from 'react-router-dom';

const Courses = ({
  getCourses,
  course: { courses, loading, selectedCourses }
}) => {
  const [searchText, setsearchText] = useState('');

  useEffect(() => {
    getCourses(searchText);
  }, [searchText]);

  const onChange = e => setsearchText(e.target.value);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Courses</h1>
      <p className='lead'>
        <i className='fas fa-book' /> Search for courses
      </p>
      <div className='searchbox'>
        <button type='submit' className='searchButton'>
          <i className='fa fa-search'></i>
        </button>
        <input
          type='text'
          className='searchTerm'
          placeholder='Which major courses are you looking for?'
          name={searchText}
          value={searchText}
          onChange={e => onChange(e)}
          required
        />
        <button
          type='reset'
          className='searchReset'
          value='Reset'
          onClick={() => {
            setsearchText('');
          }}
        >
          <i className='fa fa-times'></i>
        </button>
      </div>
      <div className='btnContainer'>
        <Link to='/coursecomparison' className='btn btn-orange'>
          Go to course comparison page {selectedCourses.length}
        </Link>
      </div>
      <div className='courses'>
        {courses.map(course => (
          <CourseItem key={course.id} courseItem={course} />
        ))}
      </div>
    </Fragment>
  );
};

Courses.propTypes = {
  getCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(mapStateToProps, {
  getCourses
})(Courses);
