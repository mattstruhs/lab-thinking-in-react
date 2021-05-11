import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        search: '',
        searchLength: 0,
      };
    
      handleSearchBarChange = (event) => {
        this.setState(
          {
            search: event.target.value,
            searchLength: event.target.value.length
          },
          () => {
            this.props.search(this.state, event);
          }
        );
    
        console.log(
          'this is search criteria from search bar child',
          event.target.value
        );
      };
    
      render() {
        return (
          <div>
            <form>
              <p>Search</p>
              <input
                type="text"
                name="search"
                onChange={this.handleSearchBarChange}
              />
            </form>
          </div>
        );
      }
    }
