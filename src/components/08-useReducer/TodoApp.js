import './styles.css'

import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'

const initialState = [{

    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false,

}]

export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState)

    return (
        <div>
            <h3>TodoApp {todos.length}</h3>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map(({ id, desc }, i) =>
                            (<li
                                className='list-group-item'
                                key={id}>
                                <p className="text-center ">{i + 1}. {desc}</p>
                                <button className='btn btn-danger'>Borrar</button>
                            </li>))
                        }

                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <form action="">
                        <input
                            type="text"
                            name="description"
                            className='form-control'
                            placeholder='Aprender'
                            autoComplete='off'
                        />
                        <button className='btn btn-outline-primary mt-1 col-12'>Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
