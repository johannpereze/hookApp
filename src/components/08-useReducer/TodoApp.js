import './styles.css'

import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { UseForm } from '../../hooks/useForm'
import { TodoList } from './TodoList'

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)
    const [{ description }, handleInputChange, reset] = UseForm({
        description: ""
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(description);

        if (description.trim().length < 1) return

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: "add",
            payload: newTodo
        }

        dispatch(action)
        reset()
    }

    const handleDelete = (todoId) => {
        const action = {
            type: "delete",
            payload: todoId
        }

        dispatch(action)
    }

    const handleToggle = (todoId) => {

        dispatch({
            type: "toggle",
            payload: todoId
        })
    }

    return (
        <div>
            <h3>TodoApp {todos.length}</h3>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
                </div>
                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            className='form-control'
                            placeholder='Aprender'
                            autoComplete='off'
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button type='submit' className='btn btn-outline-primary mt-1 col-12'>Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
