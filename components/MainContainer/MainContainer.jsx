import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './MainContainer.module.css'

function MainContainer({children}) {
  return (
    <><Navbar></Navbar>
    <div className={styles.container}>{children}</div>
    <Footer></Footer>
    </>
  )
}

export default MainContainer