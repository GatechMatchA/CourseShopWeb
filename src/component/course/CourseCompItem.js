import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCourse } from '../../actions/course';

const CourseCompItem = ({
  courseItem,
  course: { selectedCourses },
  setCourse,
  history
}) => {
  //   console.log(courseItem);
  const addSection = (
    <Link
      to={`/courses/${courseItem.id}`}
      className='btn'
      onClick={e => {
        setCourse(courseItem);
      }}
    >
      Tap to add section
    </Link>
  );

  const changeSection = (
    <Link
      to={`/courses/${courseItem.id}`}
      className='btn lead'
      onClick={e => {
        setCourse(courseItem);
      }}
    >
      Change section
    </Link>
  );

  // Get the updated course with selected section
  const tempCourse = selectedCourses.find(
    course => course.id === courseItem.id
  );

  return (
    <div className='courseCompItem bg-white p-1 my-1'>
      <div className='courseInfo'>
        <h3>{courseItem.code}</h3>
        <h5> {courseItem.title}</h5>
        <h4>{courseItem.creditHour} Credits</h4>
      </div>
      <div className='divider' />
      {
        <div>
          {tempCourse === null
            ? addSection
            : [
                'section' in tempCourse ? (
                  <div className='sectionDetail'>
                    <h3>Professor {tempCourse.section.professorName}</h3>
                    <table>
                      <tr>
                        <th>Section</th>
                        <th>Day of Week</th>
                        <th>Start</th>
                        <th>End</th>
                      </tr>
                      <tr>
                        <td>{tempCourse.section.sectionCode}</td>
                        <td>
                          {tempCourse.section.meetingTimes
                            .sort((a, b) => a.dayOfWeek - b.dayOfWeek)
                            .map(time => (
                              <span> {time.dayOfWeek} </span>
                            ))}
                        </td>
                        <td>{tempCourse.section.meetingTimes[0].startTime}</td>
                        <td>{tempCourse.section.meetingTimes[0].endTime}</td>
                        <td> {changeSection}</td>
                      </tr>
                    </table>
                  </div>
                ) : (
                  addSection
                )
              ]}
          {/* {currentCourse.section === 0 ? addSection : displaySection} */}
          {/* {currentCourse === null
            ? addSection
            : [
                'section' in currentCourse ? (
                  <div className='sectionDetail'>
                    <h3>Professor {currentCourse.section.professorName}</h3>
                    <table>
                      <tr>
                        <th>Section</th>
                        <th>Day of Week</th>
                        <th>Start</th>
                        <th>End</th>
                      </tr>
                      <tr>
                        <td>{currentCourse.section.sectionCode}</td>
                        <td>
                          {currentCourse.section.meetingTimes
                            .sort((a, b) => a.dayOfWeek - b.dayOfWeek)
                            .map(time => (
                              <span> {time.dayOfWeek} </span>
                            ))}
                        </td>
                        <td>
                          {currentCourse.section.meetingTimes[0].startTime}
                        </td>
                        <td>{currentCourse.section.meetingTimes[0].endTime}</td>
                        <td> {changeSection}</td>
                      </tr>
                    </table>
                  </div>
                ) : (
                  addSection
                )
              ]} */}
        </div>
      }
    </div>
  );
};

CourseCompItem.propTypes = {
  courseItem: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(mapStateToProps, { setCourse })(CourseCompItem);