import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSection, unselectSection } from '../../actions/course';

const SectionItem = ({
  section,
  professor,
  course: { currentCourseCompare },
  selectSection,
  unselectSection
}) => {
  const [isSelected, setisSelected] = useState(
    currentCourseCompare.selectedSection === undefined
      ? false
      : currentCourseCompare.selectedSection.id === section.id
      ? true
      : false
  );

  return (
    <div
      className='sectionDetail'
      style={{
        backgroundColor: isSelected ? '#90DDD0' : 'white',
        border: isSelected ? '#90DDD0' : 'white'
      }}
    >
      <table className='p-1'>
        <tr>
          <th>Section</th>
          <th>Day of Week</th>
          <th>Start</th>
          <th>End</th>
        </tr>
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
                e.preventDefault();
                section.professorName =
                  professor.name.firstName + ' ' + professor.name.lastName;

                setisSelected(!isSelected);

                isSelected
                  ? unselectSection(currentCourseCompare, section)
                  : selectSection(currentCourseCompare, section);
              }}
            >
              {isSelected ? 'Cancel' : 'Add'}
            </button>
          </td>
        </tr>
      </table>
    </div>
    // <Fragment>
    //   {professor.sections.length > 0 &&
    //     professor.sections
    //       .sort((a, b) => a.sectionCode - b.sectionCode)
    //       .map(section => (
    //         <div className='sectionDetail'>
    //           <table className='p-1'>
    //             <tr>
    //               <th>Section</th>
    //               <th>Day of Week</th>
    //               <th>Start</th>
    //               <th>End</th>
    //             </tr>
    //             <tr>
    //               <td>{section.sectionCode}</td>
    //               <td>
    //                 {section.meetingTimes
    //                   .sort((a, b) => a.dayOfWeek - b.dayOfWeek)
    //                   .map(time => (
    //                     <span> {time.dayOfWeek} </span>
    //                   ))}
    //               </td>
    //               <td>{section.meetingTimes[0].startTime}</td>
    //               <td>{section.meetingTimes[0].endTime}</td>
    //               <td>
    //                 <button
    //                   className='btn btn-primary'
    //                   onClick={e => {
    //                     // e.preventDefault();
    //                     section.professorName =
    //                       professor.name.firstName +
    //                       ' ' +
    //                       professor.name.lastName;
    //                     selectSection(currentCourseCompare, section);
    //                   }}
    //                 >
    //                   Add to cart
    //                 </button>
    //               </td>
    //             </tr>
    //           </table>
    //         </div>
    //       ))}
    // </Fragment>
  );
};

SectionItem.propTypes = {};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(mapStateToProps, { selectSection, unselectSection })(
  SectionItem
);
