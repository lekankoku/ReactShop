import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Slide from './slide';
require('owl.carousel/dist/assets/owl.carousel.css');
require('owl.carousel/dist/assets/owl.theme.default.css');

const options = {
  responsive: {
    0: {
      items: 1
    },
    420: {
      items: 1
    },
    600: {
      items: 1
    },
    800: {
      items: 1
    },
    1024: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
};
class Slider extends Component {
  render() {
    return (
      <div className="col-lg-5 col-md-6">
        <OwlCarousel
          items={4}
          dotClass={true}
          nav
          navText={[
            '<i className="fa fa-angle-left"></i>',
            '<i className="fa fa-angle-right"></i>'
          ]}
          responsive={options.responsive}
          className="owl-carousel carousel-style-one carousel-style-dot owl-loaded owl-drag"
        >
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: 'translate3d(-1875px, 0px, 0px)',
                transition: 'all 0s ease 0s',
                width: '7125px'
              }}
            >
              {this.props.pictures.map(picture => (
                <Slide key={picture} picture={picture} />
              ))}
            </div>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Slider;
