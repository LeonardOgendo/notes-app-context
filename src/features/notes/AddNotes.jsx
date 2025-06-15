import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotes } from '../../app/context/NotesContext';

const AddNotes = () => {
  const navigate = useNavigate();
  const { addNote } = useNotes();

  const [notesData, setNotesData] = useState({
    title: '',
    content: '',
    archived: false,
    trashed:false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotesData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    
    addNote(notesData);

    setNotesData({
      title: '',
      content: '',
      archived: false,
      trashed:false,
    });

    setTimeout(() => {
      navigate('/')
    }, 1500)
  };

  return (
    <div className="container mt-3">
      <p className='text-light'>Add Notes</p>
      <div className="mb-3 notes-area">
        <label className='text-white me-2' htmlFor="note-title">Title :</label>
        <input 
          type="text"
          id='note-title-input'
          name="title"
          value={notesData.title}
          onChange={handleChange}
        />
        <textarea
          className="notes-main-input"
          name="content"
          value={notesData.content}
          onChange={handleChange}
          placeholder="Enter your note here"
        ></textarea>
        <button className="bg-primary text-white save-btn" onClick={handleSave}>
          Save Note
        </button>
      </div>
    </div>
  );
}

export default AddNotes;
