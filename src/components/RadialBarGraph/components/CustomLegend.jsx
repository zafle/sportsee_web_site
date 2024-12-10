import './_CustomLegend.scss'

export function CustomLegend({ payload }) {
  return (
    <div className="score__legend">
      <span className="score__legend--percent">{`${payload[0].payload.value}%`}</span>
      <span className="score__legend--text">de votre objectif</span>
    </div>
  )
}
