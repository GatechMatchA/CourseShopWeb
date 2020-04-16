import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { upVote, downVote } from '../../actions/review';

const ReviewItem = ({ reviewItem, upVote, downVote }) => {
  const [up, setUp] = useState(true);
  const [down, setDown] = useState(true);

  const onClickUp = () => {
    setUp(!up);
    up
      ? upVote(reviewItem.id, reviewItem.upvote)
      : upVote(reviewItem.id, reviewItem.upvote - 2);
  };

  const onClickDown = () => {
    setDown(!down);
    down
      ? downVote(reviewItem.id, reviewItem.downvote)
      : downVote(reviewItem.id, reviewItem.downvote - 2);
  };

  return (
    <div>
      <div className='review bg-white  my-1'>
        <div>
          <img
            className='round-img'
            src='https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'
          />
          <h4>{reviewItem.author}</h4>
        </div>

        <div>
          <p className='comment'>{reviewItem.comment}</p>
          <p className='review-date'>
            Posted on{' '}
            <Moment format='YYYY/MM/DD'>{reviewItem.timestamp}</Moment>
          </p>

          <Fragment>
            <button onClick={onClickUp} type='button' className='btn btn-light'>
              <i className='fas fa-thumbs-up' />
              <span>{reviewItem.upvote}</span>
            </button>

            <button
              onClick={onClickDown}
              type='button'
              className='btn btn-light'
            >
              <i className='fas fa-thumbs-down' />
              <span>{reviewItem.downvote}</span>
            </button>
          </Fragment>
        </div>
      </div>
    </div>
  );
};

ReviewItem.propTypes = {};

export default connect(null, { upVote, downVote })(ReviewItem);
