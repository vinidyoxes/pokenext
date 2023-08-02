import React from 'react'
import styles from  './Footer.module.css'
import './Footer.module.css'

function Footer() {
  return (
    <footer className={`${styles.footer} ${styles.flexCol}`}>
        <div className={`${styles.textos} ${styles.flexCol}`}><p style={{fontSize:"14px"}} >Desenvolvido por <span>&copy; Vinicius Henrique</span></p>
        <p style={{fontSize:"12px"}}>Todos os Direitos Reservados</p>
        </div>
    </footer>
  )
}

export default Footer