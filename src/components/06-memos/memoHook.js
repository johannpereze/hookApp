import { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";

export const MemoHook = () => {

    const { counter, increment } = useCounter(10000)
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counters <small>{counter}</small></h3>
            <hr />
            <p>{memoProcesoPesado}</p>
            <button className='btn btn-primary' onClick={increment}>+1</button>
            <button className="btn btn-outline-primary ms-3" onClick={handleClick}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
