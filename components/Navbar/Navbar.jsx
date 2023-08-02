import React from 'react'
import Link from 'next/dist/client/link'
import styles from './Navbar.module.css'
import './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
       <div className={styles.logo}><Link href='/'><img src='https://github.com/twbs.png'></img></Link></div>
        <div className='Links'>
            <ul className={styles.flexRow}>
                <li className={styles.itemMenu}><Link href='/products'>Produtos</Link></li>
                <li className={styles.itemMenu}><Link href='/about'>About</Link></li>
                <li className={styles.itemMenu}><Link href='/contact'>Contact</Link></li>
                <li className={styles.itemMenu}><Link href='/todos'>To-do</Link></li>
            </ul>    
        </div>
    </div>
  )
}

export default Navbar