import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { theme } = useTheme();
  
  return (
    <div style={{ height: "100vh" }} className={theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}>
      <Home />
    </div>
  );
}

export default App;