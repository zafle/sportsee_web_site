export function averageSessionsData(averageSessions, dailyActivity) {
  function formatDay(date) {
    const options = { weekday: 'long' }
    const weekDay = new Intl.DateTimeFormat('fr-FR', options).format(date)
    return weekDay.charAt(0).toUpperCase()
  }

  const formattedAverageSessions = averageSessions.map((session, index) => {
    const letterDay = formatDay(new Date(dailyActivity[index].day))
    return {
      Xdata: letterDay,
      Ydata: session.sessionLength,
    }
  })

  const formattedData = {
    values: formattedAverageSessions,
    unit: 'min',
  }

  return formattedData
}
