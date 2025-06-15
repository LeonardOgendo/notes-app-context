import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./app/context/ThemeContext.jsx";
import { NotesProvider } from "./app/context/NotesContext.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
     <ThemeProvider>
          <NotesProvider>
               <App />
          </NotesProvider>
     </ThemeProvider>
);