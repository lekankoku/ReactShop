import React, { Component } from 'react';
import Product from './product';
import OwlCarousel from 'react-owl-carousel';
require('owl.carousel/dist/assets/owl.carousel.css');
require('owl.carousel/dist/assets/owl.theme.default.css');
const options = {
  responsive: {
    0: {
      items: 1
    },
    420: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 3
    },
    1024: {
      items: 4
    },
    1200: {
      items: 4
    }
  }
};
class ProductArea extends Component {
  render() {
    return (
      <div className="product-area ptb-110">
        <div className="container">
          <div className="section-title text-center">
            <h3>Our Products</h3>
            <p>
              Mirum est notare quam littera gothica, quam nunc putamus parum
              claram anteposuerit litterarum formas.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="custom-row">
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
                  <Product
                    picture="/assets/img/product/1.jpg"
                    name="Lekan"
                    price={500}
                  />
                  <Product
                    picture="/assets/img/product/2.jpg"
                    name="Lekan"
                    price={500}
                  />
                  <Product
                    picture="/assets/img/product/3.jpg"
                    name="Lekan"
                    price={500}
                  />
                  <Product
                    picture="/assets/img/product/4.jpg"
                    name="Lekan"
                    price={500}
                  />
                  <Product
                    picture="/assets/img/product/5.jpg"
                    name="Lekan"
                    price={500}
                  />
                  <Product
                    picture="/assets/img/product/6.jpg"
                    name="Lekan"
                    price={500}
                  />
                  <Product
                    picture="/assets/img/product/7.jpg"
                    name="Lekan"
                    price={500}
                  />
                  <Product
                    picture="/assets/img/product/8.jpg"
                    name="Lekan"
                    price={500}
                  />
                  <Product
                    picture="/assets/img/product/9.jpg"
                    name="Lekan"
                    price={500}
                  />
                  <Product
                    picture="/assets/img/product/10.jpg"
                    name="Lekan"
                    price={500}
                  />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductArea;
