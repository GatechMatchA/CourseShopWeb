import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
// import Section from './Section';
import { getCourse } from '../../actions/course';
import { getProfessors } from '../../actions/professor';

import Professor from './Professor';

const Course = ({
  match,
  getProfessors,
  professor: { professors, loading }
}) => {
  useEffect(() => {
    // getCourse(match.params.id);
    getProfessors(match.params.id);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/coursecomparison' className='btn'>
        Back To All Courses
      </Link>
      <h1 className='large text-primary'>Section Comparison Page</h1>
      <p className='lead'>
        <i className='fas fa-book' /> Compare this course's sections
      </p>
      <Professor courseId={match.params.id} />
    </Fragment>
  );
};

Course.propTypes = {
  //   course: PropTypes.object.isRequired,
  professor: PropTypes.object.isRequired,
  getProfessors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  //   course: state.course,
  professor: state.professor
});
export default connect(mapStateToProps, { getCourse, getProfessors })(Course);
