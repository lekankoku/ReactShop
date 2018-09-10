import React, { Component } from 'react';
import Banner from '../../Banner';
import ProductSlider from './Slider';
import ProductDescription from './productDescription';
class ProductDetail extends Component {
  render() {
    return (
      <div>
        <Banner PageName="Demo Sweater" picture="/assets/img/slider/2.jpg" />
        <div class="product-details-area pt-80 pb-75">
          <div class="container-medium product-container">
            <div class="row">
              <ProductSlider />
              <ProductDescription
                name="Demo Sweater"
                price={500}
                desc="iosjpspsddpso sjnfs sjnosfs usi s ius sinddosndso iufbsfbsoso usnnosbfis ijjsnnddosi sinddos hghvdis ibs isbbdso ijbdisd isjbbdosddbs sijbddbosb sddosiso ijjdbsnoss isdbdbsobs ifsi"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
