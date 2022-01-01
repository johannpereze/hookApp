import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {user, setUser} = useContext(UserContext)

    console.log(user);

    const newUser = {
        id:123,
        name:"Sebas",
        emai:"sebas@gmail.com"
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <button className='btn btn-primary' onClick={()=>setUser(newUser)}>Login</button>
        </div>
    )
}
