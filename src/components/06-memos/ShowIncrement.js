import { memo } from "react";

export const ShowIncrement = memo(({increment}) => {

    console.log('Me volví a generar :(');

    return (
        <button
            className="btn btn-primary"
            onClick={() => { increment(5) }}
        >
            incrementar
        </button>
    )
})
