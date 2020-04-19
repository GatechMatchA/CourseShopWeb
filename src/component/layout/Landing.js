import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

const Landing = (props) => {
  return (
    <body>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>Course Shop</h1>

            <div className='buttons'>
              <a href='#introduction' className='btn btn-primary'>
                Our Introduction
              </a>
              <Link to='/register' className='btn btn-primary'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-primary'>
                Login
              </Link>
            </div>
            <Link to='/courses' className='landingBtn'>
              Start Your Course Shopping Now!
            </Link>
          </div>
        </div>
      </section>

      <section id='introduction' className='intro bg-white'>
        <div className='text'>
          <h3 className='medium'>Hey Students!</h3>
          <p>
            Do you struggle a lot during course registration? <br />
            Do you have to look at numerous resources in order to make
            decisions? <br />
            DON’T WORRY! <br />
            Let me introduce our app COURSESHOP. <br />
            It helps you and all other students to facilitate the course
            registration process.
          </p>
        </div>

        <div className='image'></div>
      </section>

      <section className='video'>
        <div className='text'>
          <h1 className='medium'>Our video</h1>
        </div>
        <iframe
          className='iframe'
          src='https://www.youtube.com/embed/0GuUfUINE14'
        ></iframe>
      </section>

      <div className='team'>
        <h1 className='medium'>Our Team Members</h1>
        <ul
          style={{
            textAlign: 'left',
            marginLeft: '35%',
            listStyleType: 'circle',
          }}
        >
          <li> Jiayi Ye: jiayi.ye@gatech.edu</li>
          <li> Yuhang Li: williamlee@gatech.edu</li>
          <li> Rahil Patel: rpatel405@gatech.edu</li>
        </ul>
      </div>
    </body>
  );
};

Landing.propTypes = {};

export default Landing;
