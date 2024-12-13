/**
 * Formats User Average Sessions data from API / Mock to be used in Profile Component
 * Formatted data is used in LineGraph Component that displays Recharts LineChart
 *
 * @param {Object[]} averageSessions
 * @param {integer} averageSessions[].day from first to last day (days order, corresponding to dailyActivity[].day date)
 * @param {integer} averageSessions[].sessionLength user session length, in minutes
 *
 * @param {Object[]} dailyActivity
 * @param {string} dailyActivity[].day date 'YYYY-MM-DD'
 * @param {integer} dailyActivity[].kilogram user weight, in kg
 * @param {integer} dailyActivity[].calories user calories, in cal
 *
 * @returns {Object.< values : Array.<{ Xdata: string, Ydata: integer }>, unit: string >}
 * Returns formatted user Average Sessions data used in Recharts LineChart
 */
export function averageSessionsData(averageSessions, dailyActivity) {
  /**
   * Formats the average session day into the first letter of the week day
   * This data is used for the X axis ticks in LineGraph Component user average sessions
   *
   * @param {string} date date 'YYYY-MM-DD'
   *
   * @returns {string} first letter of the corresponding weekday in french and in uppercase
   */
  function formatDay(date) {
    // format the full date into the weekday in french
    const options = { weekday: 'long' }
    const weekDay = new Intl.DateTimeFormat('fr-FR', options).format(date)
    // return the first letter of the day in uppercase
    return weekDay.charAt(0).toUpperCase()
  }

  // Maps averageSessions array
  const formattedAverageSessions = averageSessions.map((session, index) => {
    // get date in dailyActivity array using index to find the corresponding date
    // format his date to obtain the first letter of the weekday
    const letterDay = formatDay(new Date(dailyActivity[index].day))

    // return formatted averagSessions data
    return {
      Xdata: letterDay /* data for X axis in LineChart */,
      Ydata: session.sessionLength /* data for y axis in LineChart */,
    }
  })

  const formattedData = {
    values: formattedAverageSessions,
    unit: 'min',
  }
  return formattedData
}
