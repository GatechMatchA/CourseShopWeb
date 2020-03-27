import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfessorDetail } from '../../actions/course';

const ProfItem = ({ course: { course } }) => {
  //   useEffect(() => {
  //     getProfessorDetail(prof);
  //   }, []);
  console.log(course.professors);
  //   return <div className='courseInfo'>haha</div>;
  return (
    <div className='courseInfo'>
      {course.professors.map(professor => {
        // console.log(professors);
        return <li> {professor}</li>;
      })}
    </div>
  );
};

ProfItem.propTypes = {
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(mapStateToProps, {})(ProfItem);
