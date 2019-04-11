import React, { Component } from "react";
import "./animation.css";
import "./nivo-slider.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import { addSnackbar } from "./actions/snackbarActions";
import { connect } from "react-redux";
import snackbarMessages from "./components/utils/snackbarMessages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import ProductDetail from "./components/Shop/Product/ProductDetail";
import Wishlist from "./components/Profile/Wishlist";
import Orders from "./components/Profile/Orders";
import SignUp from "./components/Profile/Auth/SignUp";
import Login from "./components/Profile/Auth/Login";
import Settings from "./components/Profile/Settings/Settings";
import ChangePassword from "./components/Profile/Settings/ChangePassword";
import AdminLogin from "./components/Admin/Login";
import Products from "./components/Admin/ViewProducts";
import Product from "./components/Admin/AddProduct";
import PageNotFound from "./components/404";
import Snackbar from "./components/snackbar";
import "./loader.css";
import ForgotPassword from "./components/Profile/Auth/forgotPassword";
import Authentication from "./components/HOCs/_requireAuth";
import ScrollPageToTop from "./scrollPageToTop";

const Frontend = props => {
  return (
    <div>
      <TransitionGroup>
        <Header />

        <Switch>
          <Route path="/profile/password" component={ChangePassword} />
          <Route path="/profile/address" component={Settings} />
          <Route path="/profile/orders" component={Orders} />
          <Route path="/profile/wishlist" component={Wishlist} />
          <Route path="/auth/reset/:token" component={ChangePassword} />
          <Route path="/auth/forgot" component={ForgotPassword} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/signup" component={SignUp} />

          <Route path="/checkout" component={Checkout} />

          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />

          <Route path="/shop/:id" component={ProductDetail} />
          <Route path="/shop" component={Shop} />
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
        </Switch>
        <Snackbar />
        <Footer />
      </TransitionGroup>
    </div>
  );
};

const Backend = props => {
  return (
    <div>
      <Switch>
        <Route path="/admin/product/:id" component={Product} />
        <Route path="/admin/product" component={Product} />
        <Route path="/admin/products" component={Products} />
        <Route path="/admin" exact component={AdminLogin} />
      </Switch>
    </div>
  );
};

class App extends Component {
  render() {
    const { addSnackbar, isLoading } = this.props;
    if (!navigator.onLine) {
      addSnackbar(snackbarMessages.connection[0]);
    }

    return (
      <Router>
        <ScrollPageToTop>
          <Route
            render={({ location }) => (
              <div>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={200}
                  >
                    <Switch location={location}>
                      <Route path="/admin" component={Backend} />
                      <Route path="/" component={Frontend} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            )}
          />
        </ScrollPageToTop>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return { isLoading: state.isLoading.isLoading, auth: state.auth };
}

export default connect(
  mapStateToProps,
  { addSnackbar }
)(App);
