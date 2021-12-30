import React from 'react'
import { UseForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = UseForm({
        description: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length < 1) return

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo)
        reset()
    }

    return (
        <>
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
        </>
    )
}
