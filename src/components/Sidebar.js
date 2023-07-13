import React from 'react'
import { FaHome, FaChartBar, FaNetworkWired, FaUserCog, FaQuestionCircle, FaUser } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li>
          <FaHome />
          <span>Home</span>
        </li>
        <li>
          <FaChartBar />
          <span>Dashboard</span>
        </li>
        <li>
          <FaNetworkWired />
          <span>Network</span>
        </li>
        <li>
          <FaUserCog />
          <span>Admin</span>
        </li>
      </ul>
      <div className="sidebar-bottom">
        <div className="sidebar-bottom-section">
          <ul className="sidebar-nav-bottom">
            <li>
              <FaQuestionCircle />
              <span>Help</span>
            </li>
            <li>
              <FaUser />
              <span>User Profile</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Sidebar