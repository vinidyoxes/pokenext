import React, { useState } from 'react'
import styles from './searchInput.module.css'
import ButtonSearch from '../../Button/ButtonSearch/ButtonSearch.js'
import { BsSearch } from 'react-icons/bs';




function SearchInput({onSubmit, search, SetSearch, pokeFilter}) {
  
  return (
    <form onSubmit={onSubmit} className={styles.inputComponent}>
        <input type='text'
        onChange={(event)=>{ 
          SetSearch(event.target.value)
          console.log(event.target.value)
          console.log(`${search} search`)
          console.log(`result do filter  ${pokeFilter}`)
        }}
        value={search}
        placeholder='Digite o nome do Pokemon'></input>
        <ButtonSearch type='submit'></ButtonSearch>
    </form>
  )
}

export default SearchInput