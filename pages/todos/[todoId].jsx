import Link from 'next/dist/client/link'
import React from 'react'

export async function getStaticProps(context){
  const {params} = context
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`,
  )

  const todo = await data.json()

  return{
    props: {todo},
  }
}

export async function getStaticPaths(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await response.json()

  const paths = data.map((todo)=>{
    return {
      params: {
        todoId: `${todo.id}`
      }
    }
  })
  return{paths,fallback:false}
}


function todoId({todo}) {
  return (
    <><h1>Exibindo o todo: {todo.id}</h1><Link href="/">Voltar</Link>
    <h3>Texto:{todo.title}</h3>
    <h4>Comentarios</h4>
    <p>Curti muitoo... e <Link href={`/todos/${todo.id}/comments/1`}>Ler Mais</Link></p>
    <p>Curti muitoo... e <Link href={`/todos/${todo.id}/comments/2`}>Ler Mais</Link></p>
    <p>Curti muitoo... e <Link href={`/todos/${todo.id}/comments/3`}>Ler Mais</Link></p>
    </>
  )
}

export default todoId