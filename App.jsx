import { useContext } from 'react';
import { ThemeContext } from './TemeContext/TemeContext.jsx';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: '10px' }}>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default App;
