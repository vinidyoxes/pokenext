import React from 'react'
import styles from './PokeCard'
import Image from 'next/dist/client/image'


function PokeCardTwo({type, pokemon}) {
  return (
    <div className={`pokecard ${styles.type} ${styles['type_' + {type}]}`} style={{width: 532, height: 735, paddingLeft: 22, paddingRight: 22, paddingTop: 10, paddingBottom: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
  <div className="Pokename" style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div className="Pikachu" style={{color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>{pokemon.name}</div>
    <div className="001" style={{color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>{pokemon.id}</div>
  </div>
  <Image style={{ maxWidth: '10px' }} src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`} alt="Pokemon"
        height={300}
        width={300}
        objectFit="contain" />
  <div className="Poketype" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
  <div style={{ display: 'flex', gap: '1rem' }}>
            {pokemon.types.map((item, index) => {
              return (
                <span className={`${styles.type} ${styles['type_' + item.type.name]}`}
                  key={index}>
                  {item.type.name}</span>

              )
            })}</div>
  </div>
</div>
  )
}

export default PokeCardTwo