import React, { Component } from 'react';
import './animation.css';
import './nivo-slider.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import ProductDetail from './components/Shop/Product/ProductDetail';
import PageNotFound from './components/404';

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
                      <Route path="/shop/product" component={ProductDetail} />
                      <Route path="/checkout" component={Checkout} />
                      <Route path="/cart" component={Cart} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/shop" exact component={Shop} />
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
