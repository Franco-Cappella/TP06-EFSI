import { FiBell, FiCompass, FiHome, FiMonitor, FiPlayCircle } from 'react-icons/fi';
import { mockUser } from '../../data/mockUser';
import './SideBar.css';

export const Sidebar = ({ currentView, setView }) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Instagram</h2>

      <button className="profile-widget" onClick={() => setView('profile')} type="button">
        <img src={mockUser.avatar} alt="Profile" className="profile-avatar" />
        <h3 className="profile-name">{mockUser.username} <span className="verified-badge">OK</span></h3>
        <p className="profile-handle">{mockUser.handle}</p>
        <div className="profile-stats">
          <span>{mockUser.followers} followers</span>
          <span>{mockUser.following} following</span>
        </div>
      </button>

      <nav className="nav-menu">
        <button
          className={`nav-item ${currentView === 'home' ? 'active' : ''}`}
          onClick={() => setView('home')}
          type="button"
        >
          <FiHome size={24} /> <span>Home</span>
        </button>
        <button className="nav-item" onClick={() => setView('home')} type="button">
          <FiCompass size={24} /> <span>Explore</span>
        </button>
        <button className="nav-item" onClick={() => setView('home')} type="button">
          <FiPlayCircle size={24} /> <span>Reels</span>
        </button>
        <button className="nav-item" onClick={() => setView('home')} type="button">
          <FiMonitor size={24} /> <span>IGTV</span>
        </button>
        <button className="nav-item" onClick={() => setView('home')} type="button">
          <FiBell size={24} /> <span>Notification</span>
        </button>
      </nav>
    </aside>
  );
};

