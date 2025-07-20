const UserCard = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <p>{data.email}</p>
    </div>
  )
}

export default UserCard
