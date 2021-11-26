import { useEffect, useState } from "react"


export const useFetch = (url) => {

    const [state, setstate] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        setstate(
            {
                error: null,
                loading: true,
                data: null
            }
        )
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setstate(
                    {
                        error: null,
                        loading: false,
                        data
                    }
                )
            })
            .catch((err) => console.log(err))
    }, [url])

    return state

}
