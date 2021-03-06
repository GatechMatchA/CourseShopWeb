import React, { Fragment, useEffect, useRef } from 'react';
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
  review: { reviews },
}) => {
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      getReviews(currentprof.course, currentprof.professor);
    }
  }, [currentprof]);

  return (
    <Fragment>
      {currentprof !== '' && (
        <div className='sectionProfSegment'>
          {currentprof !== '' && (
            <p className='lead'>
              <i className='fas fa-chalkboard-teacher' /> Professor{' '}
              {currentprof.name.firstName} {currentprof.name.lastName}
            </p>
          )}

          <div>
            <div className='profStatsChart'>
              {/* <div className='profGrade'>{currentprof.gradeDistribution.a}</div> */}
              <div className='profGrade'>
                <h4>Grade Distribution</h4>
                <XYPlot
                  height={110}
                  width={110}
                  xType='ordinal'
                  style={{
                    fontSize: 10,
                  }}
                >
                  <VerticalBarSeries
                    data={Object.entries(currentprof.gradeDistribution)
                      .sort((a, b) => a[0].localeCompare(b[0]))
                      .map(([k, v]) => ({
                        x: k,
                        y: v,
                      }))}
                  />
                  <XAxis />
                  <YAxis left={5} />
                </XYPlot>
              </div>
              <div
                className='profQua'
                style={{
                  fontSize: 15,
                }}
              >
                <h5>AVG Quality</h5>
                <h4> {currentprof.averageQuality}</h4>
              </div>
              <div
                className='profEas'
                style={{
                  fontSize: 15,
                }}
              >
                <h5>AVG Easiness</h5>
                <h4>{currentprof.averageEasiness}</h4>
              </div>
            </div>

            {/* Review Part */}
            <h2 className='small text-primary p-1'>Reviews</h2>
            {reviews.length === 0 && (
              <h3>Sorry! No sections available for now</h3>
            )}
            <div className='reviews'>
              {reviews.map((review) => (
                <ReviewItem key={review._id} reviewItem={review} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

ProfessorDetail.propTypes = {};

const mapStateToProps = (state) => ({
  professor: state.professor,
  review: state.review,
});
export default connect(mapStateToProps, { getReviews })(ProfessorDetail);
