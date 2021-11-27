import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div>
            <h1>Counters <Small value={counter} /></h1>
            <hr />
            <button className='btn btn-primary' onClick={increment}>+1</button>
            <button className="btn btn-outline-primary ms-3" onClick={handleClick}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
