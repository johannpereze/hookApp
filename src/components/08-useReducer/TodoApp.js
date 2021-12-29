import './styles.css'

import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { UseForm } from '../../hooks/useForm'

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
        const action = {
            type: "toggle",
            payload: todoId
        }

        dispatch(action)
    }

    return (
        <div>
            <h3>TodoApp {todos.length}</h3>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map(({ id, desc, done }, i) =>
                            (<li
                                className='list-group-item'
                                key={id}>
                                <p onClick={() => handleToggle(id)} className={`text-center ${done && "complete"}`}>{i + 1}. {desc}</p>
                                <button onClick={() => handleDelete(id)} className='btn btn-danger'>Borrar</button>
                            </li>))
                        }

                    </ul>
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
