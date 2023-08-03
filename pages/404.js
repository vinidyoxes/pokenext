import React from 'react'
import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'
import img from '../assets/animation_404_small.gif'
import Button from '../components/Button/Button/Button'

  

function NotFound() {
  return (
    <> 
    <Image src={img} width={250} height={125}></Image>
    <h1>404</h1>
    <p>Esta page nao existe</p>

    <Button>

     <Link href='/'><h3>Voltar para o inicio</h3></Link>

    </Button>

 
    
    </>
    
  )
}

export default NotFound