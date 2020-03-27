import {
    GET_PROFS,
    GET_SECTIONS,
} from '../actions/types';

const initialState = {
    professors: [],
    loading: true
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PROFS:
            return {
                ...state,
                professors: payload,
                loading: false
            };


        default:
            return state;
    }
}
