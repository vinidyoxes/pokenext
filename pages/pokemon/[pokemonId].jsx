import React from 'react'
import Image from 'next/dist/client/image'
import styles from './pokemons.module.css'
import Head from 'next/dist/shared/lib/head'
import PokeCardTwo from '../../components/pokemonCard/PokeCardTwo'
import { RxDividerVertical, } from 'react-icons/rx'
import { HiOutlineHashtag } from 'react-icons/hi'
import Button from '../../components/Button/Button/Button.js'
import Link from 'next/dist/client/link'

export const getStaticPaths = async () => {
  const maxPokemons = 251
  const api = `https://pokeapi.co/api/v2/pokemon/`

  const res = await fetch(`${api}/?limit=${maxPokemons}`)

  const data = await res.json()

  const paths = data.results.map((pokemon, index) => {

     index ++;

    return {
      params: { pokemonId: index.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json()

  return {
    props: { pokemon: data },
  }
}



function pokemonId({ pokemon }) {
  console.log(pokemon)
  console.log(pokemon.types[0])
  const types = [
    {
      typeName:'type_normal',
      color:'#aa9'
      },
      {
        typeName:'type_fire',
      color:'#f42'
      }
    ]

    
  return (
    <>
      <Head>
        <title>{pokemon.name}</title>

      </Head>

      <div className={`flexCol ${styles.pokeCard} ${styles['type_' + pokemon.types[0].type.name]}`}>
        <section className={styles.pokeInfo}>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{display:'flex' , alignItems:'center'}}><HiOutlineHashtag/>{pokemon.id}</h2>
            <RxDividerVertical></RxDividerVertical>
            <h1 style={{ textTransform: 'capitalize', fontSize:'1.2rem' }}>{pokemon.name}</h1>
          </div>
          
        
            <div style={{ display: 'flex', gap: '.4rem' }}>
              {pokemon.types.map((item, index) => {
               console.log(item.type.name) 
                return (
                  <span className={`${styles.type} ${styles['type_' + item.type.name]}`}
                    key={index}>
                    {item.type.name}</span>

                )
              })}
            </div>

        </section>

         <section style={{position:'relative'}} className={`${styles.imgContainer}`}>
        <Image src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`} alt="Pokemon"
                 layout="fill"
                 objectFit="fill" />

          </section>     

            <div className='informacoes' style={{display:'flex', justifyContent:'space-evenly',width:'100%'}}>
            
             <div className='altura'>
                <h4>Altura:</h4>
                <p>{pokemon.height * 10} cm</p>
             </div>

             <div className='peso'>
                <h4>Peso:</h4>
                <p>{pokemon.weight / 10} kg</p>
             </div>

            </div>
            <div className='return'>
              <Button>
                <Link href='/'><h3>Voltar</h3></Link>
                </Button>
            </div>
          </div>
    </>

  )
}

export default pokemonId