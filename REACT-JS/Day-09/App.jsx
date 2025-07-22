import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Dashboard />
    </AuthProvider>
  );
}

export default App;
