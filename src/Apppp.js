import React, { Component } from 'react';
import './animation.css';
import './nivo-slider.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import ProductDetail from './components/Shop/Product/ProductDetail';
import Wishlist from './components/Profile/Wishlist';
import Orders from './components/Profile/Orders';
import SignUp from './components/Profile/Auth/SignUp';
import Login from './components/Profile/Auth/Login';
import Settings from './components/Profile/Settings/Settings';
import ChangePassword from './components/Profile/Settings/ChangePassword';
import AdminLogin from './components/Admin/Login';
import Products from './components/Admin/ViewProducts';
import Product from './components/Admin/AddProduct';
import PageNotFound from './components/404';
//import Snackbar from './components/snackbar';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div>
              <div>
                <TransitionGroup>
                  <Header />
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={200}
                  >
                    <Switch location={location}>
                      <Route path="/admin/addproduct" component={Product} />
                      <Route path="/admin/products" component={Products} />
                      <Route
                        path="/profile/password"
                        component={ChangePassword}
                      />
                      <Route path="/profile/address" component={Settings} />
                      <Route path="/profile/orders" component={Orders} />
                      <Route path="/profile/wishlist" component={Wishlist} />
                      <Route path="/auth/login" component={Login} />
                      <Route path="/auth/signup" component={SignUp} />
                      <Route path="/shop/product" component={ProductDetail} />
                      <Route path="/checkout" component={Checkout} />
                      <Route path="/admin" component={AdminLogin} />
                      <Route path="/cart" component={Cart} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/shop" component={Shop} />
                      <Route path="/" exact component={Home} />
                      <Route component={PageNotFound} />
                    </Switch>
                  </CSSTransition>
                  <Footer />
                </TransitionGroup>
              </div>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
