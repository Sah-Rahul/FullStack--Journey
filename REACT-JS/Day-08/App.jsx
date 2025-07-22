import { ThemeProvider } from './ThemeContext';
import Navbar from './Navbar';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
