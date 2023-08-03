import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './MainContainer.module.css'
import Head from 'next/dist/shared/lib/head'
import fav from "../../public/favIcon.ico"


function Layout({children}) {
  return (
    <>
          <Head><link rel='favicon' href={fav}></link>
          </Head>
          <Navbar/>
          <main  className={`${styles.container} scroll-smooth	`}>{children}</main>
          <Footer/>

    </>
  )
}

export default Layout