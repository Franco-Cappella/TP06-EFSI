import { FiGrid, FiSettings } from 'react-icons/fi';
import './ProfileView.css';

const mockUser = {
  username: 'Ugur Mercan',
  handle: '@ugur_mercan0',
  avatar: 'https://i.pravatar.cc/150?img=11',
  bio: 'Web designer y creador de contenido sobre gatos, fotografia y redes.',
  postsCount: 15,
  followers: '121K',
  following: 348,
};

export const ProfileView = ({ posts, onOpenModal }) => {
  return (
    <section className="profile-view">
      <header className="profile-header">
        <img src={mockUser.avatar} alt={mockUser.username} className="profile-page-avatar" />

        <div className="profile-page-info">
          <div className="profile-page-title">
            <h1>{mockUser.handle}</h1>
            <button className="profile-edit-button" type="button">Editar perfil</button>
            <button className="profile-settings-button" type="button" aria-label="Configuracion">
              <FiSettings size={22} />
            </button>
          </div>

          <div className="profile-page-stats">
            <span><strong>{posts.length || mockUser.postsCount}</strong> publicaciones</span>
            <span><strong>{mockUser.followers}</strong> seguidores</span>
            <span><strong>{mockUser.following}</strong> seguidos</span>
          </div>

          <p className="profile-page-name">{mockUser.username}</p>
          <p className="profile-page-bio">{mockUser.bio}</p>
        </div>
      </header>

      <div className="profile-tab">
        <FiGrid size={16} />
        <span>PUBLICACIONES</span>
      </div>

      <div className="profile-posts-grid">
        {posts.map((post) => (
          <button
            key={post.id}
            className="profile-post"
            onClick={() => onOpenModal(post)}
            type="button"
          >
            <img src={post.url} alt={post.caption} />
          </button>
        ))}
      </div>
    </section>
  );
};
