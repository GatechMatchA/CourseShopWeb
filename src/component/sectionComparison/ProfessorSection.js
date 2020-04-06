import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setProf } from '../../actions/professor';
import Section from './Section';

const ProfessorSection = ({ professor: { professors }, setProf }) => {
  //   const [profList, setProfList] = useState(professors);
  //   profList = professors;
  //   const onSort = () => {
  //     professors = professors.sort((a, b) => b.averageGpa - a.averageGpa);
  //     // setProfList(profList.sort((a, b) => a[sortKey] - b[sortKey]));
  //   };

  return (
    <div>
      {/* <div className='sectionSort'>
        <div className='sectionSortText'> Sort sections by: </div>
        <div className='sectionSortGPA'>
          GPA
          <i class='fas fa-sort'></i>
        </div>
        <div className='sectionSortQuality'> Quality</div>
        <div className='sectionSortEasiness'> Easiness</div>
      </div> */}
      {professors.length > 0 &&
        professors
          //   .sort((a, b) => a.name.lastName.localeCompare(b.name.lastName))
          //   .sort((a, b) => a.averageGpa - b.averageGpa)
          .map(professor => (
            <div className='professorSection'>
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
                <button
                  className='btn btn-primary'
                  onClick={e => {
                    setProf(professor);
                  }}
                >
                  Details
                </button>
              </div>

              {/* <div className='profDetailBtn'>
                <Link
                  to={`/courses/${courseId}/professors/${professor.professor}`}
                  className='btn btn-primary'
                  onClick={e => {
                    setProf(professor);
                  }}
                >
                  Details
                </Link>
              </div> */}

              <Section professor={professor} />
            </div>
          ))}
    </div>
  );
};

ProfessorSection.propTypes = {
  //   mapProfessor: PropTypes.func.isRequired,
  //   course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  professor: state.professor
});

export default connect(mapStateToProps, { setProf })(ProfessorSection);
