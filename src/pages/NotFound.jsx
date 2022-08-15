import React from 'react';
import '@styles/NotFound.scss';
import 'animate.css';

import notF from '@logos/404-page.svg';

export const NotFound = () => {
  return (
    <div className='NotFound animate__animated animate__bounceIn'>
      <img src={notF}alt='404-Page Not Found' />
      <h3>Woops!</h3>
      <p>It seems like we couldn't find the page you were looking for.</p>
      <button 
        className='back-button'
        onClick={ () => history.back() }
      >Go Back</button>
    </div>
  )
}
