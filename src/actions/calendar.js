import { setAlert } from './alert';
import {
  CALENDAR_MONDAY,
  CALENDAR_TUESDAY,
  CALENDAR_WEDNESDAY,
  CALENDAR_THURSDAY,
  CALENDAR_FRIDAY,
} from './types';

// categorize sections
export const categorizeSection = (courses) => async (dispatch) => {
  console.log('selected courses', courses);
  var Monday = [];
  var Tuesday = [];
  var Wednesday = [];
  var Thursday = [];
  var Friday = [];
  for (const course of courses) {
    if (course.selectedSection !== undefined) {
      const section = course.selectedSection;
      var randNum = Math.floor(Math.random() * 8) + 1; //generate random number for color
      //   console.log('categorize', section);
      for (const time of section.meetingTimes) {
        if (time.dayOfWeek === 1) {
          section.courseCode = course.code;
          section.title = course.title;
          section.startTime = time.startTime;
          section.endTime = time.endTime;
          section.color = 'event-' + randNum;
          Monday.push(section);
        }

        if (time.dayOfWeek === 2) {
          section.courseCode = course.code;
          section.title = course.title;
          section.startTime = time.startTime;
          section.endTime = time.endTime;
          section.color = 'event-' + randNum;
          Tuesday.push(section);
        }

        if (time.dayOfWeek === 3) {
          section.courseCode = course.code;
          section.title = course.title;
          section.startTime = time.startTime;
          section.endTime = time.endTime;
          section.color = 'event-' + randNum;
          Wednesday.push(section);
        }

        if (time.dayOfWeek === 4) {
          section.courseCode = course.code;
          section.title = course.title;
          section.startTime = time.startTime;
          section.endTime = time.endTime;
          section.color = 'event-' + randNum;
          Thursday.push(section);
        }

        if (time.dayOfWeek === 5) {
          section.courseCode = course.code;
          section.title = course.title;
          section.startTime = time.startTime;
          section.endTime = time.endTime;
          section.color = 'event-' + randNum;
          Friday.push(section);
        }
      }
    }
  }

  dispatch({
    type: CALENDAR_MONDAY,
    payload: Monday,
  });

  dispatch({
    type: CALENDAR_TUESDAY,
    payload: Tuesday,
  });

  dispatch({
    type: CALENDAR_WEDNESDAY,
    payload: Wednesday,
  });

  dispatch({
    type: CALENDAR_THURSDAY,
    payload: Thursday,
  });

  dispatch({
    type: CALENDAR_FRIDAY,
    payload: Friday,
  });
};
