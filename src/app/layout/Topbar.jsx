import { useState } from 'react';
import { FaSearch, FaSun, FaMoon, FaPlus } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {theme, toggleTheme} = useTheme();
  const navigate = useNavigate();


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav bg="light" className="d-flex justify-content-between">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-box"
        />

      </form>
     
      <div className='d-flex'>
        <button onClick={() => navigate('add/notes')} className="d-flex align-items-center add-note-btn bg-primary text-white me-3">
          <FaPlus className="me-2 "/>
          <span className="me-2 add-note-txt">Add Note</span>
        </button>
        <span className='text-white ms-2 fs-6' onClick={toggleTheme}>
          {theme == "dark" ? <FaSun /> : <FaMoon />}
        </span>
      </div>
    </nav>
  );
}

export default Topbar;