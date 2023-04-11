import React from 'react'
import TodoItem from './TodoItem'

const TodoBoard = (props) => {
  return (
    <div>
      <h1>현재 시간</h1>
      {new Date().toLocaleTimeString()}
    </div>
  )
}

export default TodoBoard;