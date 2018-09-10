import React from 'react';
import Breadcrumbs from './Breadcrumbs';
const Banner = props => {
  return (
    <div
      className="breadcrumb-area text-center"
      style={{ backgroundImage: `url(${props.picture})` }}
    >
      <div className="container">
        <h1>{props.PageName}</h1>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <Breadcrumbs />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Banner;
