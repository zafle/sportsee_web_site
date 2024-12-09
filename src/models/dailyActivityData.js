export function dailyActivityData(sessions) {
  /**
   * Format the full date into the date of the day
   * @param {string} date a full date 'YYYY-MM-DD'
   * @returns {number} returns the date of the day with no leading zero
   */
  function formatDate(date) {
    const formatedDate = new Date(date)
    return formatedDate.getDate()
  }

  // Construct a new array of sessions replacing fulldate with date of the day
  const formattedSessions = sessions.map((session) => ({
    day: formatDate(session.day),
    kg: session.kilogram,
    Kcal: session.calories,
  }))

  return formattedSessions
}
