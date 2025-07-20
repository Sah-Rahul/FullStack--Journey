import { useState } from "react"

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email) return
    addUser({ name, email })
    setName("")
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Add User</button>
    </form>
  )
}

export default UserForm
