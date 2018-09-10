import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
class PageNotFound extends Component {
  render() {
    return (
      <div>
        <Banner picture="/assets/img/slider/2.jpg" PageName="404" />
        <div className="error-text-area ptb-110">
          <div className="container text-center">
            <div className="error-text">
              <h2>OOPS! PAGE NOT BE FOUND</h2>
              <h4>
                Sorry but the page you are looking for does not exist, have been
                removed, name changed or is temporarity unavailable.
              </h4>

              <Link to="/">Back to home page</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
