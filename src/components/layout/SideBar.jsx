import React from 'react';
import { FiHome, FiCompass, FiPlayCircle, FiMonitor, FiBell } from 'react-icons/fi';
import './SideBar.css'; 
const mockUser = {
  username: 'Uğur Mercan',
  handle: '@ugur_mercan0',
  avatar: 'https://i.pravatar.cc/150?img=11', // Placeholder de avatar
  followers: '121K',
  likes: '900K',
  bio: 'Web Designer & Developer | Creando cosas increíbles.',
};

export const Sidebar = ({ setView }) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Instagram</h2>
      
      <div className="profile-widget" onClick={() => setView('profile')}>
        <img src={mockUser.avatar} alt="Profile" className="profile-avatar" />
        <h3 className="profile-name">{mockUser.username} <span className="verified-badge">✔</span></h3>
        <p className="profile-handle">{mockUser.handle}</p>
        <div className="profile-stats">
          <span>👤 {mockUser.followers}</span>
          <span>❤️ {mockUser.likes}</span>
        </div>
      </div>

      <nav className="nav-menu">
        <div className="nav-item active" onClick={() => setView('home')}>
          <FiHome size={24} /> <span>Home</span>
        </div>
        <div className="nav-item">
          <FiCompass size={24} /> <span>Explore</span>
        </div>
        <div className="nav-item">
          <FiPlayCircle size={24} /> <span>Reels</span>
        </div>
        <div className="nav-item">
          <FiMonitor size={24} /> <span>IGTV</span>
        </div>
        <div className="nav-item">
          <FiBell size={24} /> <span>Notification</span>
        </div>
      </nav>
    </aside>
  );
};