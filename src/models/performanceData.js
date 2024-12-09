export function performanceData(performance) {
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
  // store categories object into a constant
  const kindNames = performance.kind

  // store value/category's id array into a constant
  const kindValues = performance.data

  // create a new array value/category by retrieving name's category in kindNames array
  // using the id stored in kindValues and translate it in french
  const formattedPerformance = kindValues.map((element) => ({
    ...element,
    kind: frenchTranslate(kindNames[element.kind]),
  }))

  return formattedPerformance
}
