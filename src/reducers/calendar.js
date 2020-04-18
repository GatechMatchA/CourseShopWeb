import {
  CALENDAR_MONDAY,
  CALENDAR_TUESDAY,
  CALENDAR_WEDNESDAY,
  CALENDAR_THURSDAY,
  CALENDAR_FRIDAY,
} from '../actions/types';

const initialState = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CALENDAR_MONDAY:
      return {
        ...state,
        Monday: payload,
        loading: false,
      };
    case CALENDAR_TUESDAY:
      return {
        ...state,
        Tuesday: payload,
        loading: false,
      };

    case CALENDAR_WEDNESDAY:
      return {
        ...state,
        Wednesday: payload,
        loading: false,
      };
    case CALENDAR_THURSDAY:
      return {
        ...state,
        Thursday: payload,
        loading: false,
      };
    case CALENDAR_FRIDAY:
      return {
        ...state,
        Friday: payload,
        loading: false,
      };

    default:
      return state;
  }
}
