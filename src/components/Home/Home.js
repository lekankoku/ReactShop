import React, { Component } from 'react';
import Slider from './Slider/Slider';
import Categories from './categories';
import ProductArea from './ProductArea/ProductArea';
class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <ProductArea />
        <Categories />
      </div>
    );
  }
}

export default Home;
