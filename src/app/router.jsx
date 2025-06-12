import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import NotesPage from "../features/notes/NotesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true, element: <NotesPage /> },
        ],
    },
])

export default router;