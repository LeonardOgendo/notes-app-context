import { useTheme } from "../context/ThemeContext";

const Home = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="container pt-5">
            <span onClick={toggleTheme} className="btn btn-primary">{theme=== "dark" ? "Light Mode" : "Dark Mode"}</span>
        <h1>Note Every Step</h1>
        <p>...write notes here</p>
        </div>
    );
}

export default Home;