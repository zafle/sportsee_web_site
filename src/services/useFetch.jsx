import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

/**
 * Hook to fetch data from API
 * @param {String} url URL to use to fetch datas
 * @param {Boolean} isMock
 * @returns {{
 *   isLoading: Boolean,
 *   data: Object,
 *   error: Boolean
 * }} An object containing the loading state, fetched data, and error state.
 */
export function useFetch(url, isMock) {
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        // if data origin is not API return
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

useFetch.propTypes = {
    url: PropTypes.string.isRequired,
    isMock: PropTypes.bool.isRequired,
}