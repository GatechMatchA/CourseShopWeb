import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setProf } from '../../actions/professor';
import Section from './Section';

const Professor = ({ courseId, professor: { professors }, setProf, match }) => {
  return (
    <Fragment>
      {professors.length > 0 &&
        professors
          .sort((a, b) => a.name.lastName.localeCompare(b.name.lastName))
          .map(professor => (
            <div className='professor'>
              <div className='profName'>
                <h4>
                  {professor.name.firstName} {professor.name.lastName}
                </h4>
              </div>

              <div className='profGPA'>
                <h5>GPA</h5>
                <h4>{professor.averageGpa}</h4>
              </div>

              <div className='profQuality'>
                <h5>Quality</h5>
                <h4>{professor.averageQuality}</h4>
              </div>

              <div className='profEasiness'>
                <h5>Easiness</h5>
                <h4>{professor.averageEasiness}</h4>
              </div>

              <div className='profDetailBtn'>
                <Link
                  to={`/courses/${courseId}/professors/${professor.professor}`}
                  className='btn btn-primary'
                  onClick={e => {
                    setProf(professor);
                  }}
                >
                  Details
                </Link>
              </div>

              <Section professor={professor} />
              {/* {professor.sections.map(section => (
            <div className='profName'>
              <h4>{section.sectionCode}</h4>
            </div>
          ))} */}
            </div>
          ))}
    </Fragment>

    // <div className='courseCompItem'>
    //   <div className='courseInfo'>
    //     {professors.map(professor => (
    //       <div> {professor.name.lastName}</div>
    //     ))}
    //   </div>

    //   {/* <div className='divider' /> */}
    // </div>
  );
};
// <div className='courseCompItem bg-white p-1 my-1'>

Professor.propTypes = {
  //   mapProfessor: PropTypes.func.isRequired,
  //   course: PropTypes.object.isRequired
};

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     course: state.course
//   };
// };
const mapStateToProps = state => ({
  professor: state.professor
});

export default connect(mapStateToProps, { setProf })(Professor);
