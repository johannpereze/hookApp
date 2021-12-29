import React from 'react'

export const TodoItem = ({ todo, handleToggle, handleDelete, i }) => {
    const { id, desc, done } = todo
    return (
        <li
            className='list-group-item'
            key={id}>
            <p onClick={() => handleToggle(id)} className={done ? "complete" : undefined}>{i + 1}. {desc}</p>
            <button onClick={() => handleDelete(id)} className='btn btn-danger'>Borrar</button>
        </li>
    )
}
