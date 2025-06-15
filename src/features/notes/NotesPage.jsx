import { useNotes } from "../../app/context/NotesContext";

const NotesPage = () => {
    const { notes } = useNotes();

    return (
        <div className="container rounded notes-card-area p-3">
            <p className="text-light display-7">My Notes</p>
            
            <div className="notes-card-list">
                 <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {notes.map((note) => (
                    <div key={note.id} className="col">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-primary mb-2">{note.title}</h5>
                                <p className="card-text text-secondary flex-grow-1">{note.content}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NotesPage;