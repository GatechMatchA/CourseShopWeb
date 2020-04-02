import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { selectCourse, unselectCourse } from '../../actions/course';
import { connect } from 'react-redux';

const CourseItem = ({
  courseItem,
  selectCourse,
  unselectCourse,
  course: { selectedCourses }
}) => {
  const [side, setSide] = useState(true);
  //check if selected
  const [isSelected, setisSelected] = useState(
    selectedCourses.some(course => course.id === courseItem.id) ? true : false
  );

  //   console.log(courseItem);
  const onClick = e => {
    setSide(!side);
  };

  return (
    <div className='single-course'>
      <div className='single-course-inner'>
        {side && (
          <div
            className='single-course-front'
            style={{
              backgroundColor: isSelected ? '#90DDD0' : 'white',
              border: isSelected ? '#90DDD0' : 'white'
            }}
          >
            <h2>{courseItem.code}</h2> <h2>{courseItem.title}</h2>{' '}
            <h4>{courseItem.creditHour} Credits</h4>
            <button className='btn btn-orange ' onClick={onClick}>
              Details
            </button>
            <button
              className='btn btn-orange'
              onClick={e => {
                e.preventDefault();
                setisSelected(!isSelected);

                isSelected
                  ? unselectCourse(courseItem)
                  : selectCourse(courseItem);
              }}
            >
              Add to comparison
            </button>
          </div>
        )}

        {!side && (
          <div className='single-course-back'>
            <h4>
              {courseItem.code} {courseItem.title}
            </h4>
            <p>{courseItem.creditHour} Credits</p>

            <p>Description: {courseItem.description}</p>
            <p>Restrictions: {courseItem.restrictions}</p>
            <p>
              Prerequisites:{' '}
              {courseItem.prerequisites.length > 0
                ? courseItem.prerequisites.map(prerequisite => (
                    <span> {prerequisite.code} </span>
                  ))
                : 'N/A'}
            </p>
            <button className='btn btn-orange' onClick={onClick}>
              back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

CourseItem.propTypes = {
  courseItem: PropTypes.object.isRequired,
  selectCourse: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(mapStateToProps, {
  selectCourse,
  unselectCourse
})(CourseItem);
