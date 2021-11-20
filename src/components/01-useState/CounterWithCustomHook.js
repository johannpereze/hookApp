import { useCounter } from "../../hooks/useCounter"
import "./counter.css"


export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100)

    return (
        <>
            <h1>Counter with hook: {state}</h1>
            <hr />
            <button onClick={() => increment(10)} className="btn btn-primary">+10</button>
            <button onClick={() => decrement(10)} className="btn btn-primary">-10</button>
            <button onClick={reset} className="btn btn-primary">Reset</button>
        </>
    )
}