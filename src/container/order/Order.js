import React, { Component } from 'react'

import styles from './order.css'

import URL from '../../config';
import Button from '../../component/UI/button/button';
import OrderContentList from '../../component/orderContentList/orderContentList';

class Order extends Component {
  state = {
    isActive: false,
    content: []
  }

  toggleOrderContent = () =>  {
    if (!this.state.isActive) {
      this.setState({ isActive: true });

      fetch(`${URL}/order/${this.props.order.id}`, {
        method: 'GET',
      })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => this.setState({
          content: response
        }));
    } else {
      this.setState({ isActive: false })
    }
  }

  render() {
    const orderContentList = this.state.isActive ? <OrderContentList orderContents={this.state.content} /> : null;
    return (
      <div>
        <div className={styles.Order}>
          <Button isActive={this.state.isActive} clicked={this.toggleOrderContent}/>
          {`Номер заказа: ${this.props.order.docNum}, Дата заказа: ${this.props.order.docDate}, ${this.props.order.description}`}
        </div>
        {orderContentList}
      </div>

    )
  }
}

export default Order;
