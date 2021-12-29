import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, i) =>
                (<TodoItem
                    key={todo.id}
                    todo={todo}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                    i={i} />))
            }

        </ul>
    )
}
