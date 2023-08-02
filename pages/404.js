import React from 'react'
import Link from 'next/dist/client/link'


  

function NotFound() {
  return (
    <> 
    <h1>404</h1>
    <p>Esta page nao existe</p>
    <Link href='/'>Voltar para o inicio</Link>
    
    </>
    
  )
}

export default NotFound