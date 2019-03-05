import React, { Component } from 'react';
import './App.css';
import ItemsList from './items-list/Item.list';

class App extends Component {
  state = {
    links: ['Link 1', 'Link 2', 'Link 3']
  };
  // navLinks = ['Link 1', 'Link 2', 'Link 3'];

  getNavLinks() {
    let links = [];
    this.state.links.forEach((link) => {
      // eslint-disable-next-line
      links.push(<a className="p-2 text-dark" href="#">{link}</a>)
    })
    return links;
  }
  render() {
    return (
      <div className="App">
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal">Your Cart</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            {this.getNavLinks()}
          </nav>
          <a className="btn btn-outline-primary" href="#">Sign up</a>
        </div>
        <div class="pricing-header px-3 py-3 pt-md-4 pb-md-4 mx-auto">
          <h4 >List of items available</h4>
          <ItemsList></ItemsList>
        </div>
      </div>
    );
  }
}

export default App;
