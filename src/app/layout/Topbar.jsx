// Create a topbar component with a search bar to the left and dark/light theme toggler to the right
// Use Bootstrap classes for styling and React Icons for the search and theme toggler icons.
import { useState } from 'react';
import { FaSearch, FaSun, FaMoon } from 'react-icons/fa';

const Topbar = ({ toggleTheme, isDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav bg="light" className="topbar">
      <form onSubmit={handleSearchSubmit} className="me-auto">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control mr-sm-2"
        />
        <button type="submit" variant="outline-secondary">
          <FaSearch />
        </button>
      </form>
      <button variant="outline-secondary" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}

export default Topbar;