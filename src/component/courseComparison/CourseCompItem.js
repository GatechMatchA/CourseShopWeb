import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCourse } from '../../actions/course';
import { clearCurrentProf } from '../../actions/professor';

const CourseCompItem = ({
  courseItem,
  course: { selectedCourses },
  setCourse,
  clearCurrentProf,
}) => {
  const addSection = (
    <div className='courseSection'>
      <button
        className='btn btn-primary'
        onClick={(e) => {
          setCourse(courseItem);
        }}
      >
        Add section
      </button>
    </div>
  );

  const changeSection = (
    <button
      className='btn btn-primary'
      onClick={(e) => {
        setCourse(courseItem);
        clearCurrentProf();
      }}
    >
      Change section
    </button>
  );

  // Get the updated course with selected section
  const tempCourse = selectedCourses.find(
    (course) => course.id === courseItem.id
  );

  return (
    <div className='courseCompItem bg-white p-1 my-1'>
      <div className='courseInfo'>
        <h3>{courseItem.code}</h3>
        <h5> {courseItem.title}</h5>
        <h4>{courseItem.creditHour} Credits</h4>
      </div>
      {/* <div className='divider' /> */}
      <div>
        {tempCourse === null ? (
          addSection
        ) : 'selectedSection' in tempCourse ? (
          <div className='courseSection'>
            <span className=' text-orange'>Professor: </span>
            <span className=' text-primary'>
              {tempCourse.selectedSection.professorName}
            </span>
            <br />
            <span className=' text-orange'>Section: </span>
            <span className=' text-primary'>
              {tempCourse.selectedSection.sectionCode}
            </span>

            {changeSection}

            {/* <table>
              <tr>
                <th>GPA</th>
                <th>Quality</th>
                <th>Easiness</th>
              </tr>
              <tr>
                <td>{tempCourse.selectedSection.sectionCode}</td>
                <td>
                  {tempCourse.selectedSection.meetingTimes
                    .sort((a, b) => a.dayOfWeek - b.dayOfWeek)
                    .map((time) => (
                      <span> {time.dayOfWeek} </span>
                    ))}
                </td>
                <td>{tempCourse.selectedSection.meetingTimes[0].startTime}</td>
                <td>{tempCourse.selectedSection.meetingTimes[0].endTime}</td>
                <td> {changeSection}</td>
              </tr>
            </table> */}
          </div>
        ) : (
          addSection
        )}
      </div>
    </div>
  );
};

CourseCompItem.propTypes = {
  courseItem: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  course: state.course,
});

export default connect(mapStateToProps, { setCourse, clearCurrentProf })(
  CourseCompItem
);
