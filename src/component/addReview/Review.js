import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { getAllCourses, getCourseProf, addReview } from '../../actions/review';
import StarRatings from 'react-star-ratings';

const initialState = {
  course: '',
  professor: '',
  quality: 0,
  easiness: 0,
  comment: ''
};

const Review = ({
  getAllCourses,
  getCourseProf,
  addReview,
  review: { allCourses, courseProfs }
}) => {
  const [formData, setFormData] = useState(initialState);
  const { course, professor, quality, easiness, comment } = formData;

  const [courseId, setCourseId] = useState(1);

  useEffect(() => {
    getAllCourses();
  }, []);

  useEffect(() => {
    getCourseProf(courseId);
  }, [courseId]);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    addReview(formData);
  };
  return (
    <Fragment>
      <Link to='/' className='btn'>
        Back To main page
      </Link>
      <h1 className='large text-primary'>Add Review Page</h1>
      <p className='lead'>
        <i className='fas fa-book' /> Write your reviews here
      </p>

      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <medium className='form-text m-1'>Select A Course</medium>
          <select
            name='course'
            // value={course.id}
            required
            onChange={e => {
              setFormData({ ...formData, course: e.target.value });
              setCourseId(e.target.value);
            }}
          >
            <option value=''>* Select Course</option>
            {allCourses.map(course => (
              <option key={course.id} value={course.id}>
                {course.code}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <medium className='form-text m-1'>Select A Professor</medium>
          <select
            name='professor'
            // value={professor}
            onChange={onChange}
            required
          >
            <option value=''>* Select Professor</option>
            {courseProfs.map(prof => (
              <option key={prof.professor} value={prof.professor}>
                {`${prof.name.firstName} ${prof.name.lastName}`}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <medium className='form-text m-1'>Quality of this course</medium>
          <StarRatings
            rating={quality}
            starHoverColor='#17a2b8'
            starRatedColor='#F9AB55'
            // starHoverColor='#99D5C9'
            // starDimension='40px'
            starSpacing='15px'
            numberOfStars={5}
            name='quality'
            value={quality}
            changeRating={newRating => {
              setFormData({ ...formData, quality: newRating });
            }}
          />
        </div>

        <div className='form-group'>
          <medium className='form-text m-1'>Easiness of this course</medium>
          <StarRatings
            rating={easiness}
            starHoverColor='#17a2b8'
            starRatedColor='#F9AB55'
            // starHoverColor='#99D5C9'
            // starDimension='40px'
            starSpacing='15px'
            numberOfStars={5}
            name='easiness'
            value={easiness}
            changeRating={newRating => {
              setFormData({ ...formData, easiness: newRating });
            }}
          />
        </div>

        <div className='form-group'>
          <medium className='form-text m-1'>
            Other comments you would like to share
          </medium>

          <textarea
            className='textarea'
            rows='5'
            cols='33'
            placeholder='Comments...'
            name='comment'
            value={comment}
            onChange={onChange}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-primary my-1' to='/'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

Review.propTypes = {};

const mapStateToProps = state => ({
  review: state.review
});

export default connect(mapStateToProps, {
  getAllCourses,
  getCourseProf,
  addReview
})(Review);
