import React from 'react'
import Link from 'next/dist/client/link'
import {useRouter} from 'next/router'

function CommentId() {
  const router = useRouter()
  const todoId = router.query.todoId
  const commentId = router.query.commentId

  console.log(commentId)
  return (
    <><h1>comentario numero : {commentId}</h1><Link href={`/todos/${todoId}`}>Voltar</Link></>
  )
}

export default CommentId