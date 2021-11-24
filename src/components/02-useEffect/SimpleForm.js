import { useEffect, useState } from 'react';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect(() => {
        console.log('Hey!');
    }, [])
    useEffect(() => {
        console.log('FormState Cambió!');
    }, [formState])
    useEffect(() => {
        console.log('Sólo el email Cambió!');
    }, [email])

    const handleInputChange = ({ target }) => {
        console.log(target.value);
        // console.log(target);
        setformState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="input-group">
                <input
                    className="input-group-text mt-3"
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-group">
                <input
                    className="input-group-text mt-3"
                    type="text"
                    name="email"
                    placeholder="email@example.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}
