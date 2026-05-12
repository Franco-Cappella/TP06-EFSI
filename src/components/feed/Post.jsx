import React, { useState } from 'react';
import { FiHeart, FiMessageCircle, FiSend } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import './Post.css';

export const Post = ({ post, onOpenModal }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation(); 
    setIsLiked(!isLiked);
  };

  return (
    <div className="post-card" onClick={() => onOpenModal(post)}>
      <img src={post.url} alt="Cat Post" className="post-image" />
      
      <div className="post-footer">
        <div className="post-user-info">
          <img src={post.userAvatar} alt="User" className="post-avatar" />
          <span className="post-username">{post.username}</span>
        </div>
        
        <div className="post-actions">
          <div onClick={handleLike} className="action-btn">
            {isLiked ? <FaHeart size={20} color="red" /> : <FiHeart size={20} />}
          </div>
          <FiMessageCircle size={20} className="action-btn" />
          <FiSend size={20} className="action-btn" />
        </div>
      </div>
    </div>
  );
};