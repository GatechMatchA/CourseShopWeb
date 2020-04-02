import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
// @ts-ignore
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis';
import { getReviews } from '../../actions/review';
import ReviewItem from './ReviewItem';

const Course = ({
  professor: { currentprof, loading },
  match,
  getReviews,
  review: { reviews }
}) => {
  useEffect(() => {
    getReviews(currentprof.course, currentprof.professor);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to={`/courses/${match.params.id}`} className='btn'>
        Back To Section Comparison
      </Link>
      <h1 className='large text-primary'>Professor Page</h1>
      <p className='lead'>
        <i className='fas fa-book' /> Professor Details
      </p>
      <div className='profStatsChart'>
        {/* <div className='profGrade'>{currentprof.gradeDistribution.a}</div> */}
        <div className='profGrade'>
          <h4>Grade Distribution</h4>
          <XYPlot height={300} width={300} xType='ordinal'>
            <VerticalBarSeries
              data={Object.entries(currentprof.gradeDistribution)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([k, v]) => ({
                  x: k,
                  y: v
                }))}
            />
            <XAxis />
            <YAxis left={5} />
          </XYPlot>
        </div>
        <div className='profQua'>
          <h5>AVG Quality</h5>
          <h4> {currentprof.averageQuality}</h4>
        </div>
        <div className='profEas'>
          <h5>AVG Easiness</h5>
          <h4>{currentprof.averageEasiness}</h4>
        </div>
      </div>

      {/* Review Part */}
      <h2 className='large text-primary'>Reviews</h2>
      <div className='reviews'>
        {reviews.map(review => (
          <ReviewItem key={review._id} reviewItem={review} />
        ))}
      </div>
    </Fragment>
  );
};

Course.propTypes = {};

const mapStateToProps = state => ({
  professor: state.professor,
  review: state.review
});
export default connect(mapStateToProps, { getReviews })(Course);
