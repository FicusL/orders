import React from 'react';

import styles from './filter.css';

const filter = ({ value, handleChange }) => {
  return (
    <div className={styles.Filter}>
      Фильтр: <input type="text" value={value} onChange={handleChange} />
    </div>

  )
}

export default filter;