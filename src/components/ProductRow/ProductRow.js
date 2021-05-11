import React, { Component } from 'react';
import './ProductRow.css'

export default class ProductRow extends Component {
  render() {
    return (
      <div id="product-row">
        <div>
          <h2>{this.props.product.name}</h2>
        </div>
        <div>
          <h2>{this.props.product.price}</h2>
        </div>
      </div>
    );
  }
}
