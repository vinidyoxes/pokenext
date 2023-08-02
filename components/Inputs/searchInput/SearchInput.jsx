import React from 'react'
import styles from './searchInput.module.css'

function SearchInput() {
  return (
    <div className={styles.inputComponent}>
        <input type='text' placeholder='Digite o nome do Pokemon'></input>
        <span></span>
    </div>
  )
}

export default SearchInput