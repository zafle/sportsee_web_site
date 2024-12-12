import CaloriesIcon from '../assets/images/calories-icon.png'
import ProteinIcon from '../assets/images/protein-icon.png'
import CarboIcon from '../assets/images/carbo-icon.png'
import LipidIcon from '../assets/images/lipid-icon.png'

/**
 * Formats User Main Data from API / Mock to be used in Profile Component
 * 'firstName' data is used to display user first name in Profile Component (Header)
 * 'score' data is used in RadialBarGraph Component that displays Recharts RadialBarchart
 * 'keyData' data is used in UserKeyData Component
 *
 * @param {Object} maindata User Main Data data from API / Mock
 *
 * @param {integer} maindata.id User ID
 *
 * @param {Object[]} maindata.userInfos User infos
 * @param {string} maindata.userInfos[].firstName User first name
 * @param {string} maindata.userInfos[].lastName User first name
 * @param {integer} maindata.userInfos[].age User first name
 *
 * @param {number} [maindata.score] User score (maindata.score | maindata.todayScore)
 * @param {number} [maindata.todayScore] User score (maindata.score | maindata.todayScore)
 *
 * @param {Object[]} maindata.keyData User key data
 * @param {integer} maindata.keyData[].calorieCount
 * @param {integer} maindata.keyData[].proteinCount
 * @param {integer} maindata.keyData[].carbohydrateCount
 * @param {integer} maindata.keyData[].lipidCount
 *
 * @returns {Object.<
 *  firstName: string,
 *  score: Array.<{ name: string, value: number }>,
 *  keyData: Array.<{ count: string, kind: string, icon: }>
 * >} Returns formatted user Main Data that is used by Profile Component (firstName), Recharts RadialBarChart (score), UserKeyData Component (keyData)
 */
export function mainDataData(maindata) {
  // get user firstName
  const firstName = maindata.userInfos.firstName

  // get user score and return a value * 100
  const score = maindata.todayScore ? maindata.todayScore : maindata.score
  const formattedScore = [{ name: 'score', value: score * 100 }]

  // get user keyData and return in an array an object for each data
  // that contains its value followed by its unit (count)
  // the data category name in french (kind),
  // the icon to display
  const keyData = maindata.keyData

  const formattedKeyData = [
    {
      count:
        (keyData.calorieCount / 1000).toFixed(3).replace('.', ',') + 'kCal',
      kind: 'Calories',
      icon: CaloriesIcon,
    },
    {
      count: keyData.proteinCount + 'g',
      kind: 'Proteines',
      icon: ProteinIcon,
    },
    {
      count: keyData.carbohydrateCount + 'g',
      kind: 'Glucides',
      icon: CarboIcon,
    },
    {
      count: keyData.lipidCount + 'g',
      kind: 'Lipides',
      icon: LipidIcon,
    },
  ]

  // return an object with all formatted data
  const formattedData = {
    firstName: firstName,
    score: formattedScore,
    keyData: formattedKeyData,
  }

  return formattedData
}
