import { useState, useEffect } from 'react'
import axios from 'axios'

export function useApi(url) {
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
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
    }, [url])

    return { isLoading, data, error }
}
