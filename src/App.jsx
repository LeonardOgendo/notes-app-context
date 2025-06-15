import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { RouterProvider } from 'react-router-dom';
import router from './app/router.jsx';
import { useTheme } from './app/context/ThemeContext.jsx';

const App = () => {
  const { theme } = useTheme();

  return (
    <div style={theme === 'dark' ? { background: '#222' } : { background: '#f2f2f2' } } className="main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;