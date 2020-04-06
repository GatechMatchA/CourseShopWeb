import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

const Landing = props => {
  return (
    <body>
      <section class='landing'>
        <div class='dark-overlay'>
          <div class='landing-inner'>
            <h1 class='x-large'>Course Shop</h1>

            <div class='buttons'>
              <a href='#introduction' class='btn btn-white'>
                Our Introduction
              </a>
              <Link to='/register' className='btn btn-primary'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-primary'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id='introduction' class='intro bg-white'>
        <div class='text'>
          <h3 class='medium'>Hey Students!</h3>
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

        <div class='image'></div>
      </section>

      <section class='video'>
        <div class='text'>
          <h1 class='large'>Our video</h1>
        </div>
        <iframe src='https://www.youtube.com/embed/tgbNymZ7vqY'> </iframe>
      </section>
    </body>
  );
};

Landing.propTypes = {};

export default Landing;
