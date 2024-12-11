/**
 * Formats User Daily Activity data fromAPI / Mock to be used in Profile Component
 * Formatted data is used in BarGraph Component that displays Recharts BarChart
 *
 * @param {Object[]} sessions
 * @param {string} sessions.day date 'YYYY-MM-DD'
 * @param {integer} sessions.kilogram
 * @param {integer} sessions.calories
 *
 * @returns {Object.<
 * values: Array.<{ XaxisTick: string, YdataBar1: integer, YdataBar2: integer }>,
 * units: Object.< unitBar1: string, unitBar2: string, nameBar1: string, nameBar2: string >
 * >} Returns formatted user daily activity data used in Recharts BarChart
 */
export function dailyActivityData(sessions) {
  /**
   * Formats the full date into the date of the day
   * @param {string} date a full date 'YYYY-MM-DD'
   * @returns {number} returns the date of the day with no leading zero
   */
  function formatDate(date) {
    const formatedDate = new Date(date)
    return formatedDate.getDate()
  }

  // Construct a new array of sessions replacing fulldate with date of the day
  const formattedSessions = sessions.map((session) => ({
    XaxisTick: formatDate(session.day),
    YdataBar1: session.kilogram,
    YdataBar2: session.calories,
  }))

  // units array to use in the BarChart
  const units = {
    unitBar1: 'kg',
    unitBar2: 'kCal',
    nameBar1: 'Poids (kg)',
    nameBar2: 'Calories brûlées (kCal)',
  }

  const formattedData = {
    values: formattedSessions,
    units: units,
  }

  return formattedData
}
