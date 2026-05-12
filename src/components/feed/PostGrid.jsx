import React from 'react';
import { Post } from './Post';
import './PostGrid.css';

export const PostGrid = ({ posts, onOpenModal }) => {
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