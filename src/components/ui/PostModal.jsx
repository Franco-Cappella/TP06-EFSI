import { useState } from 'react';
import { FiHeart, FiMessageCircle, FiX } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import './PostModal.css';

export const PostModal = ({ post, closeModal }) => {
  const [isLiked, setIsLiked] = useState(false);

  if (!post) return null;

  const visibleLikes = isLiked ? post.likes + 1 : post.likes;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <div className="modal-image-container">
          <img src={post.url} alt="Cat Modal" className="modal-image" />
        </div>

        <div className="modal-details">
          <div className="modal-header">
            <div className="modal-user-info">
              <img src={post.userAvatar} alt="User" className="modal-avatar" />
              <strong>{post.username}</strong>
            </div>
            <button className="modal-close-btn" onClick={closeModal} type="button" aria-label="Cerrar">
              <FiX size={24} />
            </button>
          </div>

          <div className="modal-body">
            <p className="modal-caption"><strong>{post.username}</strong> {post.caption}</p>
            <div className="modal-comments">
              {post.comments?.map((comment) => (
                <p key={`${comment.user}-${comment.text}`}>
                  <strong>{comment.user}</strong> {comment.text}
                </p>
              ))}
            </div>
          </div>

          <div className="modal-footer">
            <div className="modal-actions">
              <button className="modal-action-button" onClick={() => setIsLiked(!isLiked)} type="button">
                {isLiked ? <FaHeart size={24} color="#ed4956" /> : <FiHeart size={24} />}
              </button>
              <FiMessageCircle size={24} className="modal-action-icon" />
            </div>
            <p className="modal-likes">{visibleLikes} likes</p>
            <p className="modal-time">HACE {post.date?.toUpperCase() || '2 H'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
