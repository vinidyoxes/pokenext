import React from 'react'
import Image from 'next/dist/client/image'



export const getStaticPaths = async () => {
  const maxPokemons = 251
  const api = `https://pokeapi.co/api/v2/pokemon/`

  const res = await fetch(`${api}/?limit=${maxPokemons}`)

  const data = await res.json()

  const paths = data.results.map((pokemon, index) => {
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



function pokemonId({pokemon}) {
  return (
    <div className='flexCol'>
     <h1>{pokemon.name}</h1> 
     <Image style={{ maxWidth:'10px'}} src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`} alt="Pokemon" 
                height={300} 
                width={300} 
                objectFit="contain" />   
      <div>
        <h3>Numero</h3>
        <p>#{pokemon.id}</p>
        <div>
          <h3>Tipo:</h3>
          <div style={{display:'flex', gap:'1rem'}}>{pokemon.types.map((item,index)=>{
            return(
              <span style={{backgroundColor:'red'}}key={index}>{item.type.name}</span>
              
            )
          })}</div>
          <div>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10 } cm</p>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10 } kg</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pokemonId