import React from 'react';
import { FiSettings, FiCamera, FiSend, FiSearch, FiPlusCircle } from 'react-icons/fi';
import './TopBar.css';

export const TopBar = () => {
  return (
    <header className="topbar">
      <div className="search-bar">
        <FiSearch className="search-icon" size={20} />
        <input type="text" placeholder="Username, hashtag and story search" className="search-input" />
      </div>

      <div className="topbar-actions">
        <FiSettings size={24} className="action-icon" />
        <FiCamera size={24} className="action-icon" />
        <FiSend size={24} className="action-icon" />
        <button className="btn-new-post">
          <FiPlusCircle size={18} /> New Post
        </button>
      </div>
    </header>
  );
};