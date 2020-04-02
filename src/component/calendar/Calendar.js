import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import './original.css';
import { categorizeSection } from '../../actions/calendar';

// https://codepen.io/oltika/pen/GNvdgV
const Calendar = ({ categorizeSection, course: { selectedCourses } }) => {
  useEffect(() => {
    categorizeSection(selectedCourses);
  }, []);
  return (
    <div className='cd-schedule loading'>
      <div className='timeline'>
        <ul>
          <li>
            <span>09:00</span>
          </li>
          <li>
            <span>09:30</span>
          </li>
          <li>
            <span>10:00</span>
          </li>
          <li>
            <span>10:30</span>
          </li>
          <li>
            <span>11:00</span>
          </li>
          <li>
            <span>11:30</span>
          </li>
          <li>
            <span>12:00</span>
          </li>
          <li>
            <span>12:30</span>
          </li>
          <li>
            <span>13:00</span>
          </li>
          <li>
            <span>13:30</span>
          </li>
          <li>
            <span>14:00</span>
          </li>
          <li>
            <span>14:30</span>
          </li>
          <li>
            <span>15:00</span>
          </li>
          <li>
            <span>15:30</span>
          </li>
          <li>
            <span>16:00</span>
          </li>
          <li>
            <span>16:30</span>
          </li>
          <li>
            <span>17:00</span>
          </li>
          <li>
            <span>17:30</span>
          </li>
          <li>
            <span>18:00</span>
          </li>
        </ul>
      </div>

      <div className='events'>
        <ul className='wrap'>
          <li className='events-group'>
            <div className='top-info'>
              <span>Monday</span>
            </div>
            <ul>
              <li
                className='single-event'
                data-start='09:30'
                data-end='10:30'
                data-content='event-abs-circuit'
              >
                haha
              </li>
              <li
                className='single-event'
                data-start='09:30'
                data-end='10:30'
                data-content='event-abs-circuit'
                data-event='event-1'
              >
                <a href='#0'>
                  <em className='event-name'>Abs Circuit</em>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className='event-modal'>
        <header className='header'>
          <div className='content'>
            <span className='event-date'></span>
            <h3 className='event-name'></h3>
          </div>

          <div className='header-bg'></div>
        </header>

        <div className='body'>
          <div className='event-info'></div>
          <div className='body-bg'></div>
        </div>

        <a href='#0' className='close'>
          Close
        </a>
      </div>

      <div className='cover-layer'></div>
    </div>
  );
};

Calendar.propTypes = {
  //   getCourses: PropTypes.func.isRequired,
  //   course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(mapStateToProps, { categorizeSection })(Calendar);
