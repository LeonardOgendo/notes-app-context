// Create a sidebar component with a ul li of "Notes", "Archive", "Trash" arranged vertically.
// Style using Bootrap classes.

import React from 'react';
import { Link } from 'react-router-dom';
import { FaStickyNote, FaArchive, FaTrash } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light">
      <nav className="flex-column">
        <Link><li to="/notes" className="d-flex align-items-center">
          <FaStickyNote className="me-2" />
          Notes
        </li></Link>
        <Link><li to="/archive" className="d-flex align-items-center">
          <FaArchive className="me-2" />
          Archive
        </li></Link>
        <Link><li to="/trash" className="d-flex align-items-center">
          <FaTrash className="me-2" />
          Trash
        </li></Link>
      </nav>
    </div>
  );
}

export default Sidebar;