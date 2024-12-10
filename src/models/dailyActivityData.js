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
