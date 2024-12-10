/**
 * Constructs a new MainData Object with formatted datas for Profile Component
 *
 * @param {Object} maindata User Main Data data
 * @param {number} maindata.id User ID
 * @param {Object.<
 * firstName: string,
 * lastName: string,
 * age: number
 * >} maindata.userInfos User infos
 * @param {number} [maindata.score] User score (maindata.score | maindata.todayScore)
 * @param {number} [maindata.todayScore] User score (maindata.score | maindata.todayScore)
 * @param {Object.<
 * calorieCount: number,
 * proteinCount: number,
 * carbohydrateCount: number,
 * lipidCount: number
 * >} maindata.keyData User key data
 *
 * @returns {Object.<
 * firstName: string,
 * score: Array.<Object.< name: string, value: number >>,
 * keyData: <Object.<
 *  calorieCount: <Object.< count: string, kind: string >,
 * proteinCount: <Object.< count: string, kind: string >,
 * carbohydrateCount: <Object.< count: string, kind: string >,
 * lipidCount: <Object.< count: string, kind: string >
 * >>
 * >} Formatted user Main Data that is used by Profile component (firstName), Score Component (score), UserKeyData Component (keyData)
 */

export function mainDataData(maindata) {
  const firstName = maindata.userInfos.firstName

  const score = maindata.todayScore ? maindata.todayScore : maindata.score
  const formattedScore = [{ name: 'score', value: score * 100 }]
  const keyData = maindata.keyData
  const formattedKeyData = {
    calorieCount: {
      count: (keyData.calorieCount / 1000).toFixed(3) + 'kCal',
      kind: 'Calories',
    },
    proteinCount: { count: keyData.proteinCount + 'g', kind: 'Proteines' },
    carbohydrateCount: {
      count: keyData.carbohydrateCount + 'g',
      kind: 'Glucides',
    },
    lipidCount: { count: keyData.lipidCount + 'g', kind: 'Lipides' },
  }

  const formattedData = {
    firstName: firstName,
    score: formattedScore,
    keyData: formattedKeyData,
  }

  return formattedData
}
