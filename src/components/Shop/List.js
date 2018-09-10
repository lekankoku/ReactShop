import React, { Component } from 'react';
import ListItem from './ListItem';
class List extends Component {
  render() {
    return (
      <div id="list" role="tabpanel">
        <ListItem
          image="/assets/img/product/1.jpg"
          name="Demo Sweater"
          price={500}
        />
        <ListItem
          image="/assets/img/product/2.jpg"
          name="Demo Shirt"
          price={600}
        />
        <ListItem
          image="/assets/img/product/3.jpg"
          name="Demo Trouser"
          price={700}
        />
      </div>
    );
  }
}

export default List;
