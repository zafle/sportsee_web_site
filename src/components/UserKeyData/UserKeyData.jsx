import './_UserKeyData.scss'

function UserKeyData({ count, kind, icon }) {
  return (
    <div className="keydata">
      <img className="keydata__image" src={icon} alt={kind} />
      <div className="keydata__text">
        <p className="keydata__text--count">{count}</p>
        <p className="keydata__text--kind">{kind}</p>
      </div>
    </div>
  )
}

export default UserKeyData
