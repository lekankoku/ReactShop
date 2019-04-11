import React, { Component } from 'react';
import Banner from '../../Banner';
import { connect } from 'react-redux';
import { fetchProduct } from '../../../actions/productActions';
import ProductSlider from './Slider';
import Spinner from '@material-ui/core/CircularProgress';
import ProductDescription from './productDescription';
class ProductDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.fetchProduct(id);
  }

  render() {
    const { product } = this.props;
    console.log({ product });
    if (!product) {
      return (
        <div>
          <div class="product-details-area pt-80 pb-75">
            <Spinner />
          </div>
        </div>
      );
    }
    return (
      <div>
        <Banner PageName={product[0].name} picture="/assets/img/slider/2.jpg" />
        <div class="product-details-area pt-80 pb-75">
          <div class="container-medium product-container">
            <div class="row">
              <ProductSlider pictures={product[0].pictures} />
              <ProductDescription
                _id={product[0]._id}
                stock={product[0].stock}
                name={product[0].name}
                description={product[0].description}
                price={product[0].price}
                picture={product[0].pictures[0]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ products }, ownProps) {
  console.log({ products });
  return { product: products.product };
}
export default connect(mapStateToProps, { fetchProduct })(ProductDetail);
