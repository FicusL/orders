import React, { Component } from 'react'

import OrderList from '../../component/orderList/orderList';
import Filter from '../../component/filter/filter';

import URL from '../../config';

class OrdersMenu extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  
  state = {
    isLoading: false,
    orders: [],
    filterValue: ''
  }

  componentDidMount() {
    fetch(`${URL}/order`, {
      method: 'GET',
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => this.setState({
        orders: response
      }));
  }

  handleChange(event) {
    this.setState({filterValue: event.target.value});
    
    fetch(`${URL}/order?filter=${event.target.value}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => this.setState({
        orders: response
      }));
  }

  render() {
    return (
      <div>
        <Filter value={this.state.filterValue} handleChange={this.handleChange}/>
        <OrderList orders={this.state.orders} />
      </div>
    )
  }
}

export default OrdersMenu;