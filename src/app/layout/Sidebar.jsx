// Create a sidebar component with a ul li of "Notes", "Archive", "Trash" arranged vertically.
// Style using Bootrap classes.

import { Link } from 'react-router-dom';
import { FaStickyNote, FaArchive, FaTrash } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar me-5">
      <nav className="flex-column">
        <p className="nav-brand text-light fw-bold mb-3">MeNote</p>
        <Link className='text-decoration-none'><li to="/notes" className="d-flex mb-4">
          <FaStickyNote className="me-2 mt-1" />
          Notes
        </li></Link>
        <Link className='text-decoration-none'><li to="/archive" className="d-flex mb-4">
          <FaArchive className="me-2 mt-1" />
          Archive
        </li></Link>
        <Link className='text-decoration-none'><li to="/trash" className="d-flex mb-4">
          <FaTrash className="me-2 mt-1" />
          Trash
        </li></Link>
      </nav>
    </div>
  );
}

export default Sidebar;