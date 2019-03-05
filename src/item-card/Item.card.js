import React, { Component } from 'react';
import './Item.card.css';

class ItemsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card mb-3 shadow-sm item-card">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal item-title" title={this.props.itemInfo.name}>{this.props.itemInfo.name}</h4>
        </div>
        <div className="card-body item-info-body">
          <h3 className="card-title pricing-card-title">Rs.{this.props.itemInfo.price}</h3>
          <div className="item-desc">{this.props.itemInfo.description}</div>
          <button type="button" className="btn btn-lg btn-block btn-outline-primary">Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default ItemsCard;
