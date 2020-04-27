import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// Protect private route
const PrivateRoute = ({
  component: Component,
  auth: { isLoggedIn, loading },
  ...rest
}) => (
  <Route
    {...rest}
    //use render and props to check if the user is logged in
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to='/login' />
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
