import { useEffect, useState } from 'react'

function Performance({ data }) {
    const [userPerformance, setUserPerformance] = useState([])

    useEffect(() => {
        if (data !== null) {
            const kindNames = data.kind
            console.log('kindNames', kindNames)
            const kindValues = data.data
            console.log('kindValues', kindValues)

            const performanceData = kindValues.map((element) => ({
                ...element,
                kind: kindNames[element.kind],
            }))
            setUserPerformance(performanceData)
            console.log(performanceData)
        }
    }, [data])
}

export default Performance
