import React from 'react';
import fetch from 'isomorphic-unfetch';
import PokeCard from '../components/pokemonCard/PokeCard';
import styles from '../styles/Home.module.css'
import pokeball from '../public/pokeball.png'
import Image from 'next/dist/client/image';
import SearchInput from '../components/Inputs/searchInput/searchInput';


export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=251');
  const data = await res.json();
  //add pokemon id
  data.results.forEach((item,index)=>{
    item.id = index + 1
  })
  const pokemons = data.results;
  
  return {
    props: {
      pokemons,
    },
  };
}

export default function Home({pokemons}) {
  return (
    <section className={`${styles.container} flexCol`}>
      <div className='flexRow' style={{gap:'1rem'}}><h1 style={{fontSize:'2.5rem'}}>Poké<span style={{color:"#A52A2A"}}>Next</span></h1><Image src={pokeball} width='50px' height='40px'/></div>
      <SearchInput/>
      <section className={styles.pokemonContainer} style={{listStyle:'none'}}>
        {pokemons.map((pokemon) => { 
          console.log(pokemon)
          return (
          <li key={pokemon.id}><PokeCard pokemon={pokemon}></PokeCard></li>
          
        )}
        )}
      </section>
    </section>
    )
  } 
  