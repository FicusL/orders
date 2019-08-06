import React from 'react'

import styles from './button.css';

const button = ({ clicked, isActive }) => (
  isActive ?
    <button
      onClick={clicked}
      className={styles.Button}
    >
      Закрыть описание
    </button>
    : <button
      onClick={clicked}
      className={styles.Button}
    >
      Открыть описание
    </button>
)

export default button
