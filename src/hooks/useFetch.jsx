import { useDataOrigin } from './useDataOrigin'
import { useAccount } from './useAccount'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export function useFetch(query) {
    const { isMock } = useDataOrigin()
    const { userId } = useAccount()

    const url = isMock
        ? `mock/user/${userId}`
        : `http://localhost:3000/user/${userId}`
    const path = query !== 'user' ? url + '/' + query : url
    const request = isMock ? path + '/data.json' : path
    console.log('request', request)
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)

        async function getData() {
            try {
                const response = await axios.get(request)
                setData(response.data.data)
            } catch (error) {
                console.error(error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [request])
    return { isLoading, data, error }
}

useFetch.propTypes = {
    query: PropTypes.string.isRequired,
}
