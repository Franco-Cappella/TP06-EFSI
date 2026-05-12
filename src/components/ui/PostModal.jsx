import React from 'react';
import { FiX, FiHeart, FiMessageCircle } from 'react-icons/fi';
import './PostModal.css';

export const PostModal = ({ post, closeModal }) => {
  if (!post) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-image-container">
          <img src={post.url} alt="Cat Modal" className="modal-image" />
        </div>

        <div className="modal-details">
          <div className="modal-header">
            <div className="modal-user-info">
              <img src={post.userAvatar} alt="User" className="modal-avatar" />
              <strong>{post.username}</strong>
            </div>
            <FiX size={24} className="modal-close-btn" onClick={closeModal} />
          </div>

          <div className="modal-body">
            <p className="modal-caption"><strong>{post.username}</strong> {post.caption}</p>
            <p className="modal-comments">Simulacro de comentarios aquí...</p>
          </div>

          <div className="modal-footer">
            <div className="modal-actions">
              <FiHeart size={24} className="modal-action-icon" />
              <FiMessageCircle size={24} className="modal-action-icon" />
            </div>
            <p className="modal-likes">{post.likes} likes</p>
            <p className="modal-time">HACE 2 HORAS</p>
          </div>
        </div>

      </div>
    </div>
  );
};