export function averageSessionsData(sessions) {
  function formatDay(date) {
    const newDate = new Date(date)
    const weekDay = newDate.getDay()
    const shortDay = weekDay.toLocaleString('fr-FR', 'short')
    console.log('day', shortDay)
  }
  console.log(formatDay())
}
