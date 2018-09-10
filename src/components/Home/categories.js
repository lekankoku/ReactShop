import React from 'react';
import {Link} from 'react-router-dom';
const Categories = () => {
  return (
    <div className="banner-area pb-110">
      <div className="container">
        <div class="section-title text-center">
          <h3>Categories</h3>
        </div>

        <div className="row custom-margin--10">
          <div className="col-lg-6 col-md-6 custom-padding-10">
            <div className="banner-image-wrap">
              <Link to="/shop" className="banner-image">
                <img src="/assets/img/banner/6.jpg" alt="" />
              </Link>
              <div className="banner-hover-text">
                <h5>
                  <Link to="/shop">Clothings For Men’s</Link>
                </h5>
                <span>Discover Now</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 custom-padding-10">
            <div className="row custom-margin--10">
              <div className="col-lg-6 col-md-6 custom-padding-10 mb-20">
                <div className="banner-image-wrap">
                  <Link to="/shop" className="banner-image">
                    <img src="/assets/img/banner/7.jpg" alt="" />
                  </Link>
                  <div className="banner-hover-text">
                    <h5>
                      <Link to="/shop">Shoes</Link>
                    </h5>
                    <span>Discover Now</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 custom-padding-10 mb-20">
                <div className="banner-image-wrap">
                  <Link to="/shop" className="banner-image">
                    <img src="/assets/img/banner/8.jpg" alt="" />
                  </Link>
                  <div className="banner-hover-text">
                    <h5>
                      <Link to="/shop">Accessories</Link>
                    </h5>
                    <span>Discover Now</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 custom-padding-10">
                <div className="banner-image-wrap">
                  <Link to="/shop" className="banner-image">
                    <img src="/assets/img/banner/9.jpg" alt="" />
                  </Link>
                  <div className="banner-hover-text">
                    <h5>
                      <Link to="/shop">Shoes</Link>
                    </h5>
                    <span>Discover Now</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 custom-padding-10">
                <div className="banner-image-wrap">
                  <Link to="shop" className="banner-image">
                    <img src="/assets/img/banner/10.html" alt="" />
                  </Link>
                  <div className="banner-hover-text">
                    <h5>
                      <Link to="/shop">
                        Accessories
                      </Link>
                    </h5>
                    <span>Discover Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
