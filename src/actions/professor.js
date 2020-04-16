import { setAlert } from './alert';
import {
  GET_PROFS,
  SET_PROF,
  CLEAN_CURRENT_PROF,
  SORT_PROF_UP,
  SORT_PROF_DOWN
} from './types';
import API from './API';

// Get professors by courseId
// use await in array https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
export const getProfessors = courseId => async dispatch => {
  try {
    const res = await API.get(`/api/courses/${courseId}/professors`);
    const profs = res.data.payload;
    const newProfs = [];

    for (const prof of profs) {
      const res1 = await getProfDetails(prof);
      const res2 = await getSections(courseId, res1);
      res2.averageQuality = (res2.averageQuality * 5).toFixed(2);
      res2.averageEasiness = (res2.averageEasiness * 5).toFixed(2);
      // const res2 = await getBoth(prof, courseId)
      newProfs.push(res2);
    }

    // or use below
    // await Promise.all(profs.map(async prof => {
    //     try {
    //         const res2 = await axios.get(`/api/professors/${prof.professor}`)
    //         prof.name = res2.data.payload;
    //         newProfs.push(prof);

    //     } catch (error) {
    //         dispatch(setAlert(error.response.statusText, 'danger'));
    //     }
    // }))
    dispatch({
      type: GET_PROFS,
      payload: newProfs
    });

    // // Also add section to sections list
    // const allsections = [];
    // // console.log(newProfs);
    // for (const prof of newProfs) {
    //   if (prof.sections.length > 0) {
    //     console.log(prof.sections);
    //     prof.sections.forEach(section => allsections.push(section));
    //   }
    // }
    // dispatch({
    //   type: GET_COURSE_SECTIONS,
    //   payload: allsections
    // });
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error.response, 'danger'));
  }
};

// Get professor details
export const getBoth = async (prof, courseId) => {
  try {
    const res1 = await API.get(`/api/professors/${prof.professor}`);
    prof.name = res1.data.payload;
    const res2 = await API.get(
      `/api/sections?course=${courseId}&professor=${prof.professor}`
    );

    prof.sections = res2.data.payload;
    return prof;
  } catch (error) {
    console.log(error);
  }
};

// Get professor details
export const getProfDetails = async prof => {
  try {
    const res = await API.get(`/api/professors/${prof.professor}`);
    prof.name = res.data.payload;
    return prof;
  } catch (error) {
    console.log(error);
  }
};

// Get sections by courseId and professorId
export const getSections = async (courseId, prof) => {
  // console.log('getsection', courseId, prof);
  try {
    const res = await API.get(
      `/api/sections?course=${courseId}&professor=${prof.professor}`
    );
    prof.sections = res.data.payload;

    return prof;
  } catch (error) {
    console.log(error);
  }
};

// Set current professor
export const setProf = prof => async dispatch => {
  dispatch({
    type: SET_PROF,
    payload: prof
  });
};

// Clear current professor
export const clearCurrentProf = () => async dispatch => {
  dispatch({
    type: CLEAN_CURRENT_PROF,
    payload: null
  });
};

// Clear current professor
export const sortProfs = (sortKey, sortSeq) => async dispatch => {
  if (sortSeq === -1) {
    dispatch({
      type: SORT_PROF_UP,
      payload: sortKey
    });
  } else {
    dispatch({
      type: SORT_PROF_DOWN,
      payload: sortKey
    });
  }
};

// export const getProfessors = courseId => dispatch => {
//     // const newProfArray = []
//     axios.get(`/api/courses/${courseId}/professors`).then(response => {
//         // console.log('getProfessors', response.data.payload);
//         // dispatch({
//         //     type: GET_PROFS,
//         //     payload: response.data.payload
//         // });

//         const profs = response.data.payload;
//         const newProfs = [];
//         let count = 0;
//         profs.forEach(prof => {
//             axios.get(`/api/professors/${prof.professor}`).then(res => {
//                 count++;
//                 // console.log('single professor', res.data.payload);
//                 // console.log('original professor', prof);
//                 prof.name = res.data.payload;
//                 newProfs.push(prof);
//                 if (count === profs.length) {
//                     dispatch({
//                         type: GET_PROFS,
//                         payload: profs
//                     });
//                 }
//             }).catch(err => {
//                 dispatch(setAlert(err.response.statusText, 'danger'));

//             })
//             axios.get(`/api/professors/${prof.professor}`).then(res => {
//                 count++;
//                 // console.log('single professor', res.data.payload);
//                 // console.log('original professor', prof);
//                 prof.name = res.data.payload;
//                 newProfs.push(prof);
//                 if (count === profs.length) {
//                     dispatch({
//                         type: GET_PROFS,
//                         payload: profs
//                     });
//                 }
//             }).catch(err => {
//                 dispatch(setAlert(err.response.statusText, 'danger'));

//             })
//         }
//         );
//     }
//     )
//         .catch(err => {
//             console.log(err);
//             dispatch(setAlert(err.response.statusText, 'danger'));

//         })
// };

// export const getProfessors = courseId => dispatch => {
//     axios.get(`/api/courses/${courseId}/professors`).then(response => {
//         if (response && response.status === 200) {
//             console.log('getProfessors', response.data.payload);
//             dispatch({
//                 type: GET_PROFS,
//                 payload: response.data.payload
//             });
//         }

//     }).catch(err => {
//         console.log(err);
//         dispatch(setAlert(err.response.statusText, 'danger'));
//         // dispatch({
//         //     type: COURSE_ERROR,
//         //     payload: { msg: err.response.statusText, status: err.response.status }
//         // });
//     })
// };
