/**
 * Formats User Performance data from API / Mock to be used in Profile Component
 * Formatted data is used in RadarGraph Component that displays Recharts RadarChart
 *
 * @param {Object} performance User performance data
 * @param {integer} performance.userId User ID
 * @param {Object.<
 * 1: string,
 * 2: string,
 * 3: string,
 * 4: string,
 * 5: string,
 * 6: string,
 *  >} performance.kind Categories names for user performances
 * @param {Array.<{ value: integer, kind: integer }>} performance.data performance value and kind ID
 *
 * @returns {Array.<{ value: integer, kind: string }>}
 * Returns formatted user performance data used in Recharts RadarChart
 */

export function performanceData(performance) {
  /**
   * Returns the category french translation for the chart
   * @param {string} category category in english
   *
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

  // Object containing categories english names
  const kindNames = performance.kind

  // Array containing category's value (value) and id (kind)
  const kindValues = performance.data

  // Maps kindValues to replace category's ID (kind) with its corresponding name (get in kindNames using index)
  // and translate it in french
  const formattedPerformance = kindValues.map((element) => ({
    ...element,
    kind: frenchTranslate(kindNames[element.kind]),
  }))

  return formattedPerformance
}
