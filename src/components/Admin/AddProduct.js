import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Sidebar from './Sidebar';
import Button from '@material-ui/core/Button';
import { getCategories, fetchProduct } from '../../actions/productActions';
import { createProduct } from '../../actions/adminActions';
import { connect } from 'react-redux';
const styles = theme => ({
  root: {
    padding: '1%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  gutter: {
    padding: '3%',
    marginTop: '5%',
    marginBottom: '5%'
  },

  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      category: '',
      price: '',
      stock: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  renderCategories() {
    const { categories } = this.props;
    categories.map(function(category) {
      return (
        <MenuItem value={category} key={category}>
          {category}
        </MenuItem>
      );
    });
  }
  onSubmit(event) {
    console.log(event);
    event.preventDefault();
    const { name, description, category, price, stock } = this.state;
    const { createProduct, match } = this.props;
    const product = [
      {
        _id: 4,
        name: 'Shirt',
        price: 500,
        stock: 100,
        isFeatured: true,
        category: 'SHIRT',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        pictures: [
          '/assets/img/product/5.jpg',
          '/assets/img/product/1.jpg',
          '/assets/img/product/2.jpg',
          '/assets/img/product/3.jpg'
        ]
      }
    ];
    if (match.params.id) {
    }
    createProduct(product);
    this.setState({
      name: '',
      description: '',
      category: '',
      price: '',
      stock: '',
      price: '',
      picture: ''
    });
    this.props.getCategories();
  }

  componentDidMount() {
    const { match, fetchProduct, getCategories } = this.props;
    getCategories();
    if (match.params.id) {
      const id = match.params.id;

      fetchProduct(id);
    }
  }
  render() {
    const { classes, categories, match, product } = this.props;
    console.log(product);
    if (!categories && !product) {
      return <div>loading</div>;
    }
    if (match.params.id) {
      return (
        <Sidebar PageName="Edit product">
          <div className={classes.root}>
            <Paper elevation={2} className={classes.gutter}>
              <form onSubmit={this.onSubmit}>
                <Typography variant="headline" component="h3">
                  Edit Product
                </Typography>
                <TextField
                  id="full-width"
                  label="Product Name"
                  name="name"
                  InputLabelProps={{
                    shrink: true
                  }}
                  value={product[0].name}
                  onChange={this.onChange}
                  placeholder="Enter Product Name"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="full-width"
                  label="Description"
                  InputLabelProps={{
                    shrink: true
                  }}
                  name="description"
                  value={product[0].description}
                  onChange={this.onChange}
                  placeholder="Enter product description"
                  fullWidth
                  margin="normal"
                />

                <InputLabel htmlFor="age-simple">Select Category</InputLabel>
                <Select
                  onChange={this.onChange}
                  name="category"
                  placeholder="select category"
                >
                  {this.renderCategories()}
                </Select>
                <TextField
                  id="full-width"
                  label="Stock"
                  value={product[0].stock}
                  onChange={this.onChange}
                  name="stock"
                  InputLabelProps={{
                    shrink: true
                  }}
                  type="number"
                  placeholder="Enter the stock"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="full-width"
                  label="Price"
                  InputLabelProps={{
                    shrink: true
                  }}
                  type="number"
                  value={product[0].price}
                  onChange={this.onChange}
                  name="price"
                  placeholder="Enter the price"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">&#8358;</InputAdornment>
                    )
                  }}
                  margin="normal"
                />
                <TextField
                  id="full-width"
                  label="Description"
                  InputLabelProps={{
                    shrink: true
                  }}
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  placeholder="Enter product description"
                  margin="normal"
                />
                <TextField
                  id="full-width"
                  label="Description"
                  InputLabelProps={{
                    shrink: true
                  }}
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  placeholder="Enter product description"
                  margin="normal"
                />
                <TextField
                  id="full-width"
                  label="Description"
                  InputLabelProps={{
                    shrink: true
                  }}
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  placeholder="Enter product description"
                  margin="normal"
                />
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    className={classes.button}
                    type="submit"
                  >
                    Save Product
                  </Button>
                </Grid>
              </form>
            </Paper>
          </div>
        </Sidebar>
      );
    }
    return (
      <Sidebar PageName="Add product">
        <div className={classes.root}>
          <Paper elevation={2} className={classes.gutter}>
            <form onSubmit={this.onSubmit}>
              <Typography variant="headline" component="h3">
                Add Product
              </Typography>
              <TextField
                id="full-width"
                label="Product Name"
                name="name"
                InputLabelProps={{
                  shrink: true
                }}
                value={this.state.name}
                onChange={this.onChange}
                placeholder="Enter Product Name"
                fullWidth
                margin="normal"
              />
              <TextField
                id="full-width"
                label="Description"
                InputLabelProps={{
                  shrink: true
                }}
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                placeholder="Enter product description"
                fullWidth
                margin="normal"
              />

              <InputLabel htmlFor="age-simple">Select Category</InputLabel>
              <Select
                value={this.state.state}
                onChange={this.onChange}
                name="category"
                placeholder="select category"
              >
                {this.renderCategories()}
              </Select>
              <TextField
                id="full-width"
                label="Stock"
                value={this.state.stock}
                onChange={this.onChange}
                name="stock"
                InputLabelProps={{
                  shrink: true
                }}
                type="number"
                placeholder="Enter the stock"
                fullWidth
                margin="normal"
              />
              <TextField
                id="full-width"
                label="Price"
                InputLabelProps={{
                  shrink: true
                }}
                type="number"
                value={this.state.price}
                onChange={this.onChange}
                name="price"
                placeholder="Enter the price"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">&#8358;</InputAdornment>
                  )
                }}
                margin="normal"
              />
              <TextField
                id="full-width"
                label="Description"
                InputLabelProps={{
                  shrink: true
                }}
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                placeholder="Enter product description"
                margin="normal"
              />
              <TextField
                id="full-width"
                label="Description"
                InputLabelProps={{
                  shrink: true
                }}
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                placeholder="Enter product description"
                margin="normal"
              />
              <TextField
                id="full-width"
                label="Description"
                InputLabelProps={{
                  shrink: true
                }}
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                placeholder="Enter product description"
                margin="normal"
              />
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  className={classes.button}
                  type="submit"
                >
                  Save Product
                </Button>
              </Grid>
            </form>
          </Paper>
        </div>
      </Sidebar>
    );
  }
}

Product.propTypes = {
  classes: PropTypes.object
};

function mapStateToProps(state) {
  console.log(state);
  return {
    categories: state.products.categories,
    product: state.products.product
  };
}

export default connect(mapStateToProps, {
  getCategories,
  createProduct,
  fetchProduct
})(withStyles(styles)(Product));
