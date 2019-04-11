import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Sidebar from './Sidebar';
import Button from '@material-ui/core/Button';
import { getProducts } from '../../actions/productActions';
import { deleteProduct } from '../../actions/adminActions';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

function createData(_id, name, category, price, stock) {
  return { _id, name, category, price, stock };
}

const TableRowComp = props => {
  return (
    <TableRow key={props._id}>
      <TableCell component="th" scope="row">
        {props.name}
      </TableCell>

      <TableCell>{props.category}</TableCell>
      <TableCell numeric>{props.price}</TableCell>
      <TableCell numeric>{props.stock}</TableCell>
      <TableCell>
        <Button
          onClick={() => {
            props.deleteProduct(props._id);
            props.handleClose;
          }}
        >
          Delete Product
        </Button>
      </TableCell>
      <TableCell>
        <Button>
          <Link to={`/admin/product/${props._id}`}>Edit Product</Link>
        </Button>
      </TableCell>
    </TableRow>
  );
};
class Products extends React.Component {
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  createRows() {
    const { products } = this.props;

    return _.map(
      products,
      ({ _id, name, description, price, stock, pictures, category }) => {
        return createData(_id, name, category, price, stock);
      }
    );
  }

  render() {
    const { classes, products, deleteProduct } = this.props;

    const rows = this.createRows();
    if (!products) {
      return <div>loading</div>;
    }
    return (
      <Sidebar PageName="View Products">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Category</TableCell>
                <TableCell numeric>Price</TableCell>
                <TableCell numeric>Stock</TableCell>
                <TableCell>Delete Product</TableCell>
                <TableCell>Update Product</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {_.map(
                rows,
                ({ _id, name, price, category, stock, description }) => {
                  return (
                    <TableRowComp
                      _id={_id}
                      name={name}
                      category={category}
                      price={price}
                      stock={stock}
                      deleteProduct={deleteProduct}
                    />
                  );
                }
              )}
            </TableBody>
          </Table>
        </Paper>
      </Sidebar>
    );
  }
}

Products.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log(state);
  return { products: state.products.products };
}

export default connect(mapStateToProps, { getProducts, deleteProduct })(
  withStyles(styles)(Products)
);
