import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
// @ts-ignore
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis';
import { getReviews } from '../../actions/review';
import ReviewItem from './ReviewItem';

const ProfessorDetail = ({
  professor: { currentprof, loading },
  getReviews,
  review: { reviews }
}) => {
  useEffect(() => {
    getReviews(currentprof.course, currentprof.professor);
  }, [currentprof]);

  return loading ? (
    <Spinner />
  ) : (
    <div className='sectionProfSegment'>
      <h1 className='medium text-primary'>Details</h1>
      {currentprof !== '' && (
        <p className='lead'>
          <i className='fas fa-chalkboard-teacher' /> Professor{' '}
          {currentprof.name.firstName} {currentprof.name.lastName}
        </p>
      )}
      {currentprof !== '' && (
        <div>
          <div className='profStatsChart'>
            {/* <div className='profGrade'>{currentprof.gradeDistribution.a}</div> */}
            <div className='profGrade'>
              <h4>Grade Distribution</h4>
              <XYPlot
                height={120}
                width={120}
                xType='ordinal'
                style={{
                  fontSize: 10
                }}
              >
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
            <div
              className='profQua'
              style={{
                fontSize: 15
              }}
            >
              <h5>AVG Quality</h5>
              <h4> {currentprof.averageQuality}</h4>
            </div>
            <div
              className='profEas'
              style={{
                fontSize: 15
              }}
            >
              <h5>AVG Easiness</h5>
              <h4>{currentprof.averageEasiness}</h4>
            </div>
          </div>

          {/* Review Part */}
          <h2 className='small text-primary'>Reviews</h2>
          <div className='reviews'>
            {reviews.map(review => (
              <ReviewItem key={review._id} reviewItem={review} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

ProfessorDetail.propTypes = {};

const mapStateToProps = state => ({
  professor: state.professor,
  review: state.review
});
export default connect(mapStateToProps, { getReviews })(ProfessorDetail);
