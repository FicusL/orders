import React from 'react';

import OrderContent from '../orderContent/orderContent';

import styles from './orderContentList.css';

const orderContentList = ({ orderContents }) => {
  const orderContentList = orderContents.map(orderContent => <OrderContent orderContent={orderContent} key={orderContent.id} />)
  return (
    <div className={styles.OrderComponent}>
      {orderContentList}
    </div>
  )
}

export default orderContentList;