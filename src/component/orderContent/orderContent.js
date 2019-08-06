import React from 'react';

import styles from './orderContent.css';

const orderContent = ({ orderContent }) => {
  return (
    <div className={styles.OrderContent}>
      {`Наименование: ${orderContent.name}, Кол-во: ${orderContent.qty}, Цена: ${orderContent.price}, Сумма: ${orderContent.sum}`}
    </div>
  )
}

export default orderContent;