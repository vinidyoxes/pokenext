import React from 'react'
import Link from 'next/dist/client/link'
import styles from './Navbar.module.css'
import './Navbar.module.css'
import Image from 'next/dist/client/image'
import logo from '../../public/pokeball.png'

function Navbar() {
  return (
    <div className={styles.navbar}>
       <div className={styles.col}>
        <Link href='/'>
          <div className={styles.logo}>
          <Image src={logo} width='70px' height="70px" alt='pokenext'/>
          <h2>Pokenext</h2>
          </div>
          </Link>

        </div>
        <div className={styles.col}>
            <ul className={styles.flexRow}>
                <li className={styles.itemMenu}><Link href='/about'>Sobre</Link></li>
            </ul>    
        </div>
    </div>
  )
}

export default Navbar