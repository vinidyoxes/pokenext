import React from 'react'
import { BsSearch } from 'react-icons/bs';
import styles from './buttonSearch.module.css'



function ButtonSearch({type,onSubmit}) {
  return (
    <button className={styles.buttonSearch}type={type}><BsSearch/></button>
  )
}

export default ButtonSearch