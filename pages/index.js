import React, { useState } from 'react';
import PokeCard from '../components/pokemonCard/PokeCard';
import styles from '../styles/Home.module.css'
import pokeball from '../public/pokeball.png'
import Image from 'next/dist/client/image';
import SearchInput from '../components/Inputs/searchInput';


export async function getStaticProps() {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({pokemons}) {
  const onSubmit = (event)=>{
    event.preventDefault();
    console.log(`${search} valor do search ao dar submitt`)
  }
  const [search, SetSearch] = useState('')

  const pokeFilter = pokemons.filter((pokemon)=>{
    return pokemon.name.startsWith(search)
  })
                 
  return (
    <section className={`${styles.container} flexCol`}>
      <div className='flexRow' style={{gap:'1rem'}}><h1 style={{fontSize:'2.5rem'}}>Poké<span style={{color:"#A52A2A"}}>Next</span></h1><Image src={pokeball} width='50px' height='40px' alt='logo'/></div>
      <SearchInput 
      search={search}
      SetSearch={SetSearch}
      onSubmit={onSubmit}
      filter={pokeFilter}

      />
      <section className={styles.pokemonContainer} style={{listStyle:'none'}}>
        {pokeFilter.map((pokemon) => { 
          return (
          <li key={pokemon.id}><PokeCard pokemon={pokemon}></PokeCard>
          </li>
          
        )}
        )}
      </section>
    </section>
    )
  } 
  
