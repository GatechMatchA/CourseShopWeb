import axios from 'axios';
import { setAlert } from './alert';
import { GET_SECTIONS } from './types';

// Get sections by courseId and professorId
// export const getSections = (courseId, profId) => async dispatch => {
//     try {
//         const res = await axios.get(`/api/sections?course=${courseId}&professor=${profId}`)

//         dispatch({
//             type: GET_SECTIONS,
//             payload: res.data.payload
//         });

//     } catch (error) {
//         console.log(error);
//         dispatch(setAlert(error.response.statusText, 'danger'));
//     }
// };
