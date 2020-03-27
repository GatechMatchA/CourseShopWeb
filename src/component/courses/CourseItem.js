import React, { Fragment, useState, useEffect } from 'react';
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
            <h2>{courseItem.code}</h2> <h2>{courseItem.title}</h2>{' '}
            <h4>{courseItem.creditHour} Credits</h4>
            <button className='btn btn-orange' onClick={onClick}>
              flip
            </button>
            <button
              className='btn btn-orange'
              onClick={e => {
                e.preventDefault();
                setisSelected(!isSelected);
                // if (
                //   selectedCourses.some(course => course._id === courseItem._id)
                // )
                isSelected
                  ? unselectCourse(courseItem)
                  : selectCourse(courseItem);
                // if (isSelected) {
                //   unselectCourse(courseItem);
                // } else {
                //   if (
                //     !selectedCourses.some(
                //       course => course._id === courseItem._id
                //     )
                //   ) {
                //     selectCourse({ courseItem });
                //   }
                // }
              }}
            >
              Add to comparison
            </button>
          </div>
        )}

        {!side && (
          <div className='flip-card-back'>
            <h4>
              {courseItem.code} {courseItem.title}
            </h4>
            <p>{courseItem.creditHour} Credits</p>
            <p>Description: {courseItem.description}</p>
            <p>Restrictions: {courseItem.restrictions}</p>
            <p>
              Prerequisites:{' '}
              {courseItem.prerequisites.map(prerequisite => (
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