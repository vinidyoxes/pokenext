import React from 'react'
import styles from './todos.module.css'
import todoList from '../../assets/todo.json'
import Link from 'next/dist/client/link'

const todoListTitle = todoList


function todos() {
  return (
    <div className={styles.container}>
        <h1>Lista de Tarefas</h1>
        <ul className={styles.cardItem}>
          {
          todoList.map((todo)=>{ return (

            <li className='flexRow'key={todo.id}><h4>{todo.title}</h4> <div style={{display:"flex",gap:"1rem"}}><span><Link href={`/todos/${todo.id}`}>Concluir</Link></span><span>Deletar</span></div></li>
          )
        })}

        </ul>
    
    </div>
  )
}

export default todos