import React from 'react'
import styles from './pokeCard.module.css'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'

function PokeCard({ pokemon }) {
  return (
    <div className={styles.card}>
        <Link href={`/pokemon/${pokemon.id}`}> 
        <div className={styles.inside__Card}>
            <div className={styles.imgContainer} style={{position:'relative', width:'150px' , height:'150px', overflow:'hidden'}}>
                <Image src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`} alt="Pokemon" 
                layout='fill'
                objectFit="fill" />   
                   
            </div>
            <h4 className={styles.pokename} style={{textTransform:'capitalize'}}>#{pokemon.id} {pokemon.name}</h4>
        </div>
        </Link>
    </div>
  )
}

export default PokeCard