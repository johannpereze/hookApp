import { useState } from "react"


export const UseForm = (initialState = {
    name: '',
    email: '',
    password: ''
}) => {

    const [values, setValues] = useState( initialState )

    const handleInputChange = ({ target }) => {
        // console.log(target.value);
        // console.log(target);
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [ values, handleInputChange]

}
