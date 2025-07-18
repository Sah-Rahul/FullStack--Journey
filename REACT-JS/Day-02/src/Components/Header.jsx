import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Header
