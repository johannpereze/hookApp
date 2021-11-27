import { memo } from "react";

export const Small = memo(({value}) => {

    console.log('Me volví a llamar :(');

    return (
        <small>
            {value}
        </small>
    )
})
