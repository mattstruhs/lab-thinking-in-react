import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import data from '../../data.json'

export default class FilterableProductTable extends Component {

    state = {
        products: this.props.products,
        searchParamLength: 0,
      };

    updateViewFromSearchBar = (search) => {
        const standardizeSearch = search.search.toLowerCase();
        const copyOfStateData = [...this.state.products];
        const copyOfFullData = data.data;
        const searchLength = search.search.length;
        const lastSearchLength = this.state.searchParamLength;
    
        if (searchLength < lastSearchLength) {
          const reverseFilteredData = copyOfFullData.filter((Obj) => {
            return Obj.name.toLowerCase().includes(standardizeSearch);
          });
          this.setState({
            products: reverseFilteredData,
            searchParamLength: search.search.length,
          });
        } else {
          const filteredData = copyOfStateData.filter((Obj) => {
            return Obj.name.toLowerCase().includes(standardizeSearch);
          });
          this.setState({
            products: filteredData,
            searchParamLength: search.search.length,
          });
        }
      };
  render() {
    return (
      <>
        <div>
          <SearchBar search={this.updateViewFromSearchBar} />
        </div>

        {this.state.products.filter(obj =>{
            return obj.category === "Sporting Goods"
        })}

        <div>
          <ProductTable products={this.state.products} />
        </div>
      </>
    );
  }
}
