import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCourses } from '../../actions/course';
import CourseItem from './CourseItem';
import { Link } from 'react-router-dom';

const Courses = ({
  getCourses,
  searchCourses,
  course: { courses, loading, selectedCourseNum, selectedCourses }
}) => {
  const [searchText, setsearchText] = useState('');
  const [comparisonNum, setcomparisonNum] = useState(0);

  useEffect(() => {
    getCourses(searchText);
  }, [searchText]);

  const onChange = e => setsearchText(e.target.value);
  //   console.log(selectedCourses);
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
          <i class='fa fa-search'></i>
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
          <i class='fa fa-times'></i>
        </button>
      </div>
      <div className='btnContainer'>
        <Link to='/coursecomparison' className='btn btn-orange'>
          Go to course comparison page {selectedCourseNum}
        </Link>
        {/* <p>{selectedCourses}</p> */}
      </div>
      <div className='courses'>
        {courses.map(course => (
          //   <li onClick={() => setcomparisonNum(comparisonNum + 1)}>
          <CourseItem
            key={course._id}
            course={course}
            // onClick={() => setcomparisonNum(comparisonNum + 1)}
          />
          //   </li>
        ))}
      </div>
    </Fragment>
  );
};

Courses.propTypes = {
  getCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  selectedCourseNum: PropTypes.number.isRequired,
  selectedCourses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(mapStateToProps, {
  getCourses
})(Courses);
