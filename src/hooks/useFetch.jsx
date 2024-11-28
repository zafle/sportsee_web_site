import { useDataOrigin } from './useDataOrigin'
import { useAccount } from './useAccount'
import { useState, useEffect } from 'react'
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
        if (!request) return
        setLoading(true)
        async function fetchData() {
            try {
                const response = await fetch(request)
                const data = await response.json()
                setData(data.data)
            } catch (err) {
                console.log('+++++ error ++++', err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [request])
    return { isLoading, data, error }
}

useFetch.propTypes = {
    query: PropTypes.string.isRequired,
}
