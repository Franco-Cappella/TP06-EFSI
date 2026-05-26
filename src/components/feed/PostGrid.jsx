import { Post } from './Post';
import './PostGrid.css';

export const PostGrid = ({ posts, isLoading, error, onOpenModal }) => {
  if (isLoading) {
    return <p className="postgrid-message">Cargando publicaciones...</p>;
  }

  if (error) {
    return <p className="postgrid-message postgrid-error">{error}</p>;
  }

  return (
    <div className="postgrid-container">
      <h2 className="postgrid-title">TRENDING</h2>
      <div className="postgrid-columns">
        {posts.map((post) => (
          <div key={post.id} className="postgrid-item">
            <Post post={post} onOpenModal={onOpenModal} />
          </div>
        ))}
      </div>
    </div>
  );
};
