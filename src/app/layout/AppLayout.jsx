// Create an AppLayout component importing a Sidebar and a Topbar component
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const AppLayout = () => {
  return (
    <div className="d-flex app-layout">
      <Sidebar />
      <div className="main-content flex-fill">
        <Topbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;