/**
 * Construct a new array of user performance formatted data
 * Used in Performance React Component that displays Performance RadarChart
 *
 * @param {Object} performance User performance data
 * @param {Object} performance.userId User ID
 * @param {Object.<
 * 1: string,
 * 2: string,
 * 3: string,
 * 4: string,
 * 5: string,
 * 6: string,
 *  >} performance.kind Categories names for user performances
 * @param {Array.<Object.< value: number, kind: number >>} performance.data performance value and kind ID
 *
 * @returns {Array.<Object.< value: number, kind: string >>} formattedPerformance : performance value and performance kind in french
 */

export function performanceData(performance) {
  /**
   * Returns the category french translation for the chart
   * @param {string} category category in english
   * @returns {string} category in french
   */
  function frenchTranslate(category) {
    switch (category) {
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
        return category
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
