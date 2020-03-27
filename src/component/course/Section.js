import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectSection } from '../../actions/course';
import ProfItem from './ProfItem';

const Section = ({ professor, course: { currentCourse }, selectSection }) => {
  return (
    <Fragment>
      {professor.sections.length > 0 &&
        professor.sections
          .sort((a, b) => a.sectionCode - b.sectionCode)
          .map(section => (
            <div className='sectionDetail'>
              <table className='p-1'>
                <tr>
                  <th>Section</th>
                  <th>Day of Week</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
                {/* {section.meetingTimes.map(time => <tr><td>{section.sectionCode}</td><td>{(time.startTime)}</td></tr>)} */}
                <tr>
                  <td>{section.sectionCode}</td>
                  <td>
                    {section.meetingTimes
                      .sort((a, b) => a.dayOfWeek - b.dayOfWeek)
                      .map(time => (
                        <span> {time.dayOfWeek} </span>
                      ))}
                  </td>
                  <td>{section.meetingTimes[0].startTime}</td>
                  <td>{section.meetingTimes[0].endTime}</td>
                  <td>
                    <button
                      className='btn btn-primary'
                      onClick={e => {
                        // e.preventDefault();
                        section.professorName =
                          professor.name.firstName +
                          ' ' +
                          professor.name.lastName;
                        selectSection(currentCourse, section);
                      }}
                    >
                      Add to cart
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          ))}
    </Fragment>
  );
};
// <div className='courseCompItem bg-white p-1 my-1'>

Section.propTypes = {};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(mapStateToProps, { selectSection })(Section);
