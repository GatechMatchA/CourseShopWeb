import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import './style.css';
import { categorizeSection } from '../../actions/calendar';
import EventItem from './EventItem';

// https://codepen.io/oltika/pen/GNvdgV
const Calendar = ({
  categorizeSection,
  course: { selectedCourses },
  calendar: { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday },
}) => {
  useEffect(() => {
    categorizeSection(selectedCourses);
  }, []);

  return (
    <Fragment>
      <Link to='/coursecomparison' className='calendarBtn'>
        Back To Course Comparison
      </Link>
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
                {Monday.map((event) => (
                  <EventItem
                    key={event.id}
                    start={event.startTime.slice(0, 5)}
                    end={event.endTime.slice(0, 5)}
                    content={event}
                  />
                ))}
              </ul>
            </li>

            <li className='events-group'>
              <div className='top-info'>
                <span>Tuesday</span>
              </div>
              <ul>
                {Tuesday.map((event) => (
                  <EventItem
                    key={event.id}
                    start={event.startTime.slice(0, 5)}
                    end={event.endTime.slice(0, 5)}
                    content={event}
                  />
                ))}
              </ul>
            </li>

            <li className='events-group'>
              <div className='top-info'>
                <span>Wednesday</span>
              </div>
              <ul>
                {Wednesday.map((event) => (
                  <EventItem
                    key={event.id}
                    start={event.startTime.slice(0, 5)}
                    end={event.endTime.slice(0, 5)}
                    content={event}
                  />
                ))}
              </ul>
            </li>

            <li className='events-group'>
              <div className='top-info'>
                <span>Thursday</span>
              </div>
              <ul>
                {Thursday.map((event) => (
                  <EventItem
                    key={event.id}
                    start={event.startTime.slice(0, 5)}
                    end={event.endTime.slice(0, 5)}
                    content={event}
                  />
                ))}
              </ul>
            </li>

            <li className='events-group'>
              <div className='top-info'>
                <span>Friday</span>
              </div>
              <ul>
                {Friday.map((event) => (
                  <EventItem
                    key={event.id}
                    start={event.startTime.slice(0, 5)}
                    end={event.endTime.slice(0, 5)}
                    content={event}
                  />
                ))}
              </ul>
            </li>

            <li className='events-group'>
              <div className='top-info'>
                <span>Saturday</span>
              </div>
              <ul>
                {Saturday.map((event) => (
                  <EventItem
                    key={event.id}
                    start={event.startTime.slice(0, 5)}
                    end={event.endTime.slice(0, 5)}
                    content={event}
                  />
                ))}
              </ul>
            </li>

            <li className='events-group'>
              <div className='top-info'>
                <span>Sunday</span>
              </div>

              <ul>
                {Saturday.map((event) => (
                  <EventItem
                    key={event.id}
                    start={event.startTime.slice(0, 5)}
                    end={event.endTime.slice(0, 5)}
                    content={event}
                  />
                ))}
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
    </Fragment>
  );
};

Calendar.propTypes = {
  //   getCourses: PropTypes.func.isRequired,
  //   course: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  course: state.course,
  calendar: state.calendar,
});

export default connect(mapStateToProps, { categorizeSection })(Calendar);
