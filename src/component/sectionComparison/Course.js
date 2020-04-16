import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
// import Section from './Section';
import { getCourse } from '../../actions/course';
import { getProfessors } from '../../actions/professor';

import ProfessorSection from './ProfessorSection';
import ProfessorDetail from './ProfessorDetail';

const Course = ({
  match,
  getProfessors,
  professor: { professors, loading }
}) => {
  useEffect(() => {
    getProfessors(match.params.id);
  }, []);

  //   const onSort = sortKey => {
  //     professors.sort((a, b) => a.sortKey < b.sortKey);
  //   };

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

      <div className='sectionCompLayout'>
        <div>
          <ProfessorSection courseId={match.params.id} />
        </div>
        <div>
          <ProfessorDetail />
        </div>
      </div>
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
