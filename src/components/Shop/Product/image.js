import React from 'react';
import { Link } from 'react-router-dom';
const Slide = props => {
  return (
    <div className="owl-item" style={{ width: '375px' }}>
      <div className="custom-col">
        <div className="single-product-item">
          <div className="product-image">
            <img src={props.picture} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
