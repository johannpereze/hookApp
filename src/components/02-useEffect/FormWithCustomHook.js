import { useEffect } from 'react';
import { UseForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = UseForm({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('Email cambió');
        return () => {
            // cleanup
        }
    }, [email])

    const handleSubmit = (e) => { e.preventDefault()
    console.log(formValues); }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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
            <div className="input-group">
                <input
                    className="input-group-text mt-3"
                    type="password"
                    name="password"
                    placeholder="Password..."
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button className="btn btn-primary mt-2" type="submit">Enviar</button>
        </form>
    )
}
