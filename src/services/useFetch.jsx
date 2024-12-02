import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetch(url, isMock) {
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (isMock) {
            return
        }
        function getData() {
            setLoading(true)

            axios
                .get(url)
                .then((response) => {
                    setData(response.data.data)
                })
                .catch((error) => {
                    console.log(error)
                    setError(true)
                })
                .finally(() => {
                    setLoading(false)
                })
        }

        getData()
    }, [url, isMock])

    return { isLoading, data, error }
}
