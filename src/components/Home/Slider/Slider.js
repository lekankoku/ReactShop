import React, { Component } from 'react';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

require('nivo-slider/jquery.nivo.slider.js');

class Slider extends Component {
  componentDidMount() {
    jquery('#slider').nivoSlider({
      effect: 'fold', // Specify sets like: 'fold,fade,sliceDown'
      slices: 15, // For slice animations
      boxCols: 8, // For box animations
      boxRows: 4, // For box animations
      animSpeed: 500, // Slide transition speed
      pauseTime: 3000, // How long each slide will show
      startSlide: 0, // Set starting Slide (0 index)
      directionNav: false, // Next & Prev navigation
      controlNav: true, // 1,2,3... navigation
      controlNavThumbs: false, // Use thumbnails for Control Nav
      pauseOnHover: true, // Stop animation while hovering
      manualAdvance: true, // Force manual transitions
      prevText: '<i class="fa fa-angle-left"></i>', // Prev directionNav text
      nextText: '<i class="fa fa-angle-right"></i>', // Next directionNav text
      randomStart: true, // Start on a random slide
      beforeChange: function() {}, // Triggers before a slide transition
      afterChange: function() {}, // Triggers after a slide transition
      slideshowEnd: function() {}, // Triggers after all slides have been shown
      lastSlide: function() {}, // Triggers when last slide is shown
      afterLoad: function() {} // Triggers when slider has loaded
    });
  }
  render() {
    return (
      <div className="slider-area">
        <div id="slider">
          <img
            src="/assets/img/slider/2.jpg"
            alt="slider-img"
            title="#caption2"
          />
          <img
            src="/assets/img/slider/1.jpg"
            alt="slider-img"
            title="#caption1"
          />
          <img
            src="/assets/img/slider/3.jpg"
            alt="slider-img"
            title="#caption3"
          />
        </div>
        <div
          className="nivo-html-caption"
          id="caption2"
          style={{ background: 'rgba(0, 0, 0, 0)' }}
        >
          <div className="slider-progress" />
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-0 col-lg-8 offset-lg-1">
                <div className="slider-text slide-two text-left">
                  <h5 className="wow slideInDown" data-wow-delay=".3s">
                    -10% OFF THIS WEEK
                  </h5>
                  <h1 className="wow zoomIn" data-wow-delay=".9s">
                    Dress Shirt Nego
                  </h1>
                  <p className="wow fadeIn" data-wow-delay="1.3s">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie<br />consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros.
                  </p>
                  <div className="slider-btn-wrapper">
                    <div className="slider-btn">
                      <a href="shop.html">read more</a>
                    </div>
                    <div className="slider-btn">
                      <a href="shop.html">shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nivo-html-caption" id="caption1">
          <div className="slider-progress" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-text text-center">
                  <h5 className="wow slideInDown" data-wow-delay=".3s">
                    SALE OFF THIS WEEK
                  </h5>
                  <h1 className="wow zoomIn" data-wow-delay=".9s">
                    Summer Collection
                  </h1>
                  <p className="wow fadeIn" data-wow-delay="1.3s">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie<br />consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros.
                  </p>
                  <div className="slider-btn-wrapper">
                    <div className="slider-btn">
                      <a href="shop.html">read more</a>
                    </div>
                    <div className="slider-btn">
                      <a href="shop.html">shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nivo-html-caption" id="caption3">
          <div className="slider-progress" />
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-0 col-lg-8 offset-lg-1">
                <div className="slider-text slide-two text-left">
                  <h5 className="wow slideInDown" data-wow-delay=".3s">
                    ONLY IN OUR STORE
                  </h5>
                  <h1 className="wow zoomIn" data-wow-delay=".9s">
                    Perfect Outerwear
                  </h1>
                  <p className="wow fadeIn" data-wow-delay="1.3s">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie<br />consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros.
                  </p>
                  <div className="slider-btn-wrapper">
                    <div className="slider-btn">
                      <a href="shop.html">read more</a>
                    </div>
                    <div className="slider-btn">
                      <a href="shop.html">shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
