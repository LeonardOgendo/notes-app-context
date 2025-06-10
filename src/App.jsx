import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { RouterProvider } from 'react-router-dom';
import router from './app/router.jsx';

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;