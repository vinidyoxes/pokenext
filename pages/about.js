import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/dist/client/image'
import Charizard from '../public/images/charizard.png'
import styles from '../styles/About.module.css'
import LottiePlayer from "@lottiefiles/react-lottie-player";
import squirtle from "../assets/animation_lkthyu3n_small.gif"


export default function About() {
  return  ( 
    <><main className={styles.main}>
      <div className={styles.textos}>

        <h1>Sobre o Projeto</h1>
        <p>O Pokenext é um projeto criado para aprofundar conhecimentos em NextJS, Fetch api, ReactHooks, SPA, Routes e CSS Modules</p>

      </div>
      <Image src={squirtle} width="300" height="300" alt='charizard'></Image>
    </main>
    </>    
  )
}
