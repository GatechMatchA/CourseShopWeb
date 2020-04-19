import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCourse } from '../../actions/course';
import { clearCurrentProf } from '../../actions/professor';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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

  const [copied, setCopied] = useState(false);

  console.log(copied);

  return (
    <div className='courseCompItem bg-white p-1 my-1'>
      <div className='courseInfo'>
        <h3>{courseItem.code}</h3>
        <h5> {courseItem.title}</h5>
        <h5>{courseItem.creditHour} Credits</h5>
      </div>
      {/* <div className='divider' /> */}
      <div>
        {tempCourse === null ? (
          addSection
        ) : tempCourse.selectedSection === undefined ? (
          addSection
        ) : tempCourse.selectedSection.length === 0 ? (
          addSection
        ) : (
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
            <br />
            <span className=' text-orange'>Copy CRN: </span>
            {/* <span className=' text-primary'>
              {tempCourse.selectedSection.crn}
            </span> */}
            <CopyToClipboard
              text={tempCourse.selectedSection.crn}
              onCopy={() => setCopied(true)}
            >
              <span className=' text-primary'>
                {tempCourse.selectedSection.crn}
              </span>
            </CopyToClipboard>
            {/* <br /> */}
            {copied ? (
              <span style={{ color: 'red', fontSize: '10px' }}> - Copied!</span>
            ) : (
              <div />
            )}

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
