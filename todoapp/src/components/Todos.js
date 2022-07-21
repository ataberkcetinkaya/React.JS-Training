import React from 'react'

const Todos = ({todos, deleteItem}) => { //props with curly brackets so I don't have to use props.todos
  return (
    <>
     <ul className='list'>
        {
          todos.map((todo, index) =>
          <li key={index}>
            <span>{todo.name}</span>
            <strong className={todo.status === '1' ? 'status1' : todo.status === '2' ? 'status2' : 'status3'}>{todo.status}</strong>
            <b onClick={() => deleteItem(index)} className='liBtn'>Delete</b>
          </li>
        )}
      </ul>
    </>
  )
}

export default Todos