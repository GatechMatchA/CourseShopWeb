import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EventItem = ({ start, end, content }) => {
  function getScheduleTimestamp(time) {
    //accepts hh:mm format - convert hh:mm to timestamp
    time = time.replace(/ /g, '');
    var timeArray = time.split(':');
    var timeStamp = parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
    return timeStamp;
  }

  var duration = getScheduleTimestamp(end) - getScheduleTimestamp(start);

  var eventTop = (getScheduleTimestamp(start) - 540) * 1.66;
  var eventHeight = (duration / 30) * 50;

  return (
    <li
      className='single-event'
      data-event={content.color}
      style={{
        top: eventTop + 'px',
        height: eventHeight + 'px',
      }}
    >
      <span className='event-date'>
        {start} - {end}
      </span>

      {/* <em className='event-name'>
        {content.courseCode} {content.professorName}
      </em> */}
      <p className='event-name'>
        {content.courseCode} - Sec {content.sectionCode}
      </p>
      <p className='event-name'>{content.professorName}</p>
    </li>
  );
};

export default EventItem;
