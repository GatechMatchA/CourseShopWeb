import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { selectCourse, unselectCourse } from '../../actions/course';
import { connect } from 'react-redux';

const CourseItem = ({
  //   course: {
  //     _id,
  //     code,
  //     major,
  //     title,
  //     description,
  //     creditHour,
  //     restrictions,
  //     professors,
  //     sections,
  //     prerequisites,
  //     dependents
  //   },
  course,
  selectCourse,
  unselectCourse
}) => {
  const [side, setSide] = useState(true);
  const [isSelected, setisSelected] = useState(false);

  const onClick = e => {
    setSide(!side);
  };

  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        {side && (
          <div
            className='flip-card-front'
            style={{
              backgroundColor: isSelected ? '#90DDD0' : 'white',
              border: isSelected ? '#90DDD0' : 'white'
            }}
          >
            <h2>{course.code}</h2> <h2>{course.title}</h2>{' '}
            <h4>{course.creditHour} Credits</h4>
            <button className='btn btn-orange' onClick={onClick}>
              flip
            </button>
            <button
              className='btn btn-orange'
              onClick={e => {
                e.preventDefault();

                setisSelected(!isSelected);
                isSelected ? unselectCourse(course) : selectCourse({ course });
              }}
            >
              Add to comparison
            </button>
          </div>
        )}

        {!side && (
          <div className='flip-card-back'>
            <h4>
              {course.code} {course.title}
            </h4>
            <p>{course.creditHour} Credits</p>
            <p>Description: {course.description}</p>
            <p>Restrictions: {course.restrictions}</p>
            <p>
              Prerequisites:{' '}
              {course.prerequisites.map(prerequisite => (
                <p> {prerequisite.code}</p>
              ))}
            </p>
            <button className='btn btn-orange' onClick={onClick}>
              flip
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

CourseItem.propTypes = {
  course: PropTypes.object.isRequired,
  selectCourse: PropTypes.func.isRequired
};

export default connect(null, {
  selectCourse,
  unselectCourse
})(CourseItem);
