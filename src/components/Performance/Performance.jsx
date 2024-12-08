import { useEffect, useState } from 'react'
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
} from 'recharts'
import colors from '../../assets/colors/colors'
import PropTypes from 'prop-types'
import './_Performance.scss'

/**
 * Creates the Performance Chart developed with Recharts
 * Displays the performance for a user
 * @param {Object} props
 * @param {Object} performance
 * @param {String} performance.userId user id
 * @param {Object} performance.kind literal object associating IDs and labels for performance categories
 * @param {Object} performance.data
 * @param {number} performance.data.value value for specified category (performance.data.kind)
 * @param {number} performance.data.kind category's ID
 * @returns {React.ReactElement} A React component displaying the Performance Chart
 */
function Performance({ performance }) {
    const [userPerformance, setUserPerformance] = useState([])

    /**
     * Returns the category french translation for the chart
     * @param {string} item category in english
     * @returns {string} category in french
     */
    function frenchTranslate(item) {
        switch (item) {
            case 'cardio':
                return 'Cardio'
            case 'energy':
                return 'Energie'
            case 'endurance':
                return 'Endurance'
            case 'strength':
                return 'Force'
            case 'speed':
                return 'Vitesse'
            case 'intensity':
                return 'Intensité'
            default:
                return item
        }
    }

    // create a new array value: number/category: string by replacing categorys'id with category's name in french
    useEffect(() => {
        // store categories object into a constant
        const kindNames = performance.kind

        // store value/category's id array into a constant
        const kindValues = performance.data

        // create a new array value/category by retrieving name's category in kindNames array
        // using the id stored in kindValues and translate it in french
        const performanceData = kindValues.map((element) => ({
            ...element,
            kind: frenchTranslate(kindNames[element.kind]),
        }))
        setUserPerformance(performanceData)
    }, [performance])

    // construct Performance Chart using Recharts
    const renderRadarChart = (
        <RadarChart
            outerRadius={88}
            width={258}
            height={263}
            startAngle={210}
            endAngle={570}
            data={userPerformance}
            className="performance__chart__barchart"
        >
            <PolarGrid
                stroke="white"
                polarRadius={[10, 20, 42, 65, 88]}
                radialLines={false}
            />
            <PolarAngleAxis
                dataKey={'kind'}
                tickLine={false}
                axisLine={false}
                tick={{
                    fill: '#ffffff',
                    fontSize: 12,
                    fontWeight: 400,
                    marginTop: 5,
                }}
                className="performance__chart__barchart--ticks"
            />
            <PolarRadiusAxis domain={[0, 300]} tick={false} axisLine={false} />
            <Radar dataKey={'value'} fill={colors.primaryColor} opacity={0.7} />
        </RadarChart>
    )

    return <div className="performance__chart">{renderRadarChart}</div>
}

Performance.propTypes = {
    performance: PropTypes.object.isRequired,
}

export default Performance
