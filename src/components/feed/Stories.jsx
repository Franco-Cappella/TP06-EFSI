import './Stories.css';

export const Stories = () => {
  const stories = Array.from({ length: 7 }); 

  return (
    <div className="stories-container">
      <h2 className="stories-title">STORIES</h2>
      <div className="stories-list">
        {stories.map((_, i) => (
          <div key={i} className="story-item">
            <div className="story-border">
              <img 
                src={`https://i.pravatar.cc/150?img=${i + 1}`} 
                alt="Story" 
                className="story-img" 
              />
            </div>
            <span className="story-username">@user_{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
