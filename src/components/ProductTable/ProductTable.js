import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';

export default class ProductTable extends Component {
  handleCategory = () => {
    console.log('you called handleCategory function');
  };

  render() {
    return (
      <div id="product-table">
        <div id="product-table-header">
          <h2>Name</h2>
          <h2>Price</h2>
        </div>
        {this.props.products.map((product) => {
          return <ProductRow product={product} />;
        })}
      </div>
    );
  }
}
