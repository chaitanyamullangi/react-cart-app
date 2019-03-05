import React, { Component } from 'react';
import './Item.list.css';
import ItemsCard from '../item-card/Item.card';
// import $ from 'jquery';
import {ProductList} from '../data/productsList.js'

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.loadItemsList();
  }

  loadItemsList() {
    // $.getJSON('../json/productsList.json')
    //   .then(({ results }) => this.setState({ list: results }));
    setTimeout(() => {
      this.setState({ list: ProductList });
    }, 3000)
  }
  
  getItemsCard() {
    let items = [];
    this.state.list.forEach((info) => {
      items.push(<ItemsCard itemInfo={info}></ItemsCard>);
    })
    return items;
  }
  render() {
    return (
      <div className="continer">
        <div className="card-deck mb-3">
          {this.getItemsCard()}
        </div>
      </div>
    );
  }
}

export default ItemsList;
