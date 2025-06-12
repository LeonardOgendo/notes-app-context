import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { RouterProvider } from 'react-router-dom';
import router from './app/router.jsx';

const App = () => {
  return (
    <div style={{ background: '#222' }} className="main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;