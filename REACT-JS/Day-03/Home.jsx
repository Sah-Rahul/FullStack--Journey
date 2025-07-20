import { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState("Loading...")

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(json => setData(json.message))
      .catch(err => setData("Error fetching data"))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h2> Home Page</h2>
      <p>Message from Backend: <strong>{data}</strong></p>
    </div>
  )
}

export default Home
