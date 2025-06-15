import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import NotesPage from "../features/notes/NotesPage";
import AddNotes from "../features/notes/AddNotes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true, element: <NotesPage /> },
            { path: 'add/notes', element: <AddNotes /> },
        ],
    },
])

export default router;