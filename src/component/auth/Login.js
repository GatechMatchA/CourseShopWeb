import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // use axios to send data
  const onSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Username'
            name='username'
            value={username}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Login' />
        <Link className='btn btn-primary my-1' to='/'>
          Go Back
        </Link>
      </form>

      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = { login: PropTypes.func.isRequired };

export default connect(null, { login })(Login);
