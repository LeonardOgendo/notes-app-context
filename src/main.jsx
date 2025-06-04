import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);