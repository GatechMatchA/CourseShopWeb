import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfessors } from '../../actions/professor';

import SectionItem from './SectionItem';
import { setProf, sortProfs } from '../../actions/professor';

const SectionComparison = ({
  getProfessors,
  sortProfs,
  setProf,
  professor: { professors, loading },
  course: { currentCourseCompare },
}) => {
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      getProfessors(currentCourseCompare.id);
    }
  }, [currentCourseCompare]);

  const onSortUp = (sortKey) => {
    sortProfs(sortKey, -1);
  };

  const onSortDown = (sortKey) => {
    sortProfs(sortKey, 1);
  };

  return (
    <Fragment>
      {currentCourseCompare !== '' && (
        <div>
          <div className='sectionSort'>
            <div className='sectionSortText'> Sort by: </div>
            <div className='sectionSortGPA'>
              <div className='text'>GPA </div>
              <i
                class='fas fa-arrow-up '
                onClick={() => {
                  onSortUp('averageGpa');
                }}
              ></i>
              <i
                class='fas fa-arrow-down '
                onClick={() => {
                  onSortDown('averageGpa');
                }}
              ></i>
            </div>
            <div className='sectionSortQuality'>
              <div className='text'>Quality </div>
              <i
                class='fas fa-arrow-up'
                onClick={() => {
                  onSortUp('averageQuality');
                }}
              ></i>
              <i
                class='fas fa-arrow-down'
                onClick={() => {
                  onSortDown('averageQuality');
                }}
              ></i>
            </div>
            <div className='sectionSortEasiness'>
              <div className='text'>Easiness </div>
              <i
                class='fas fa-arrow-up'
                onClick={() => {
                  onSortUp('averageEasiness');
                }}
              ></i>
              <i
                class='fas fa-arrow-down'
                onClick={() => {
                  onSortDown('averageEasiness');
                }}
              ></i>
            </div>
          </div>

          {/* If professors are not loaded: use Spinner */}
          {loading ? <Spinner /> : <div />}
          {professors.length === 0 && (
            <h3>Sorry! No sections available for now</h3>
          )}
          {professors.length > 0 &&
            !loading &&
            professors
              //   .sort(onSort(sortKey))
              //   .sort((a, b) => a.name.lastName.localeCompare(b.name.lastName))
              //   .sort((a, b) => a.averageGpa - b.averageGpa)
              .map((professor) => (
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
                      onClick={(e) => {
                        setProf(professor);
                      }}
                    >
                      Details
                    </button>
                  </div>

                  {professor.sections.length > 0 &&
                    professor.sections
                      .sort((a, b) => a.sectionCode - b.sectionCode)
                      .map((section) => (
                        <SectionItem
                          key={section.id}
                          section={section}
                          professor={professor}
                        />
                      ))}
                </div>
              ))}
        </div>
      )}
    </Fragment>
  );
};

SectionComparison.propTypes = {
  course: PropTypes.object.isRequired,
  professor: PropTypes.object.isRequired,
  getProfessors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  course: state.course,
  professor: state.professor,
});
export default connect(mapStateToProps, { getProfessors, setProf, sortProfs })(
  SectionComparison
);
