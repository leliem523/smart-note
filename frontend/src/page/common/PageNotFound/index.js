import './common.scss';
import React from 'react';
import NotFoundLogo from '../../../assets/images/notFound.jpg';

function PageNotFound() {
  return (
    <div className='not_found__page'>
    <div className='not_found__box'>
    <h1>404</h1>
     <p>Page Not Found</p>
     <img src={NotFoundLogo} />
    </div>
    </div>
  )
}

export default PageNotFound