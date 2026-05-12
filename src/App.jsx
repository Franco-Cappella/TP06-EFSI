import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { Stories } from './components/feed/Stories';
import { PostGrid } from './components/feed/PostGrid';
import { PostModal } from './components/ui/PostModal';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    // Requisito 3: Consumo de API
    const fetchCats = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=15');
        
        // Enriqueciendo la data de la API para que parezca Instagram
        const enrichedData = response.data.map((cat, index) => ({
          ...cat,
          username: `@cat_lover_${index}`,
          userAvatar: `https://i.pravatar.cc/150?img=${index + 20}`,
          likes: Math.floor(Math.random() * 5000),
          caption: '¡Miau! Disfrutando del día. 🐾 #catsofinstagram'
        }));
        
        setPosts(enrichedData);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="app-container">
      <Sidebar setView={setCurrentView} />
      
      <main className="main-content">
        <TopBar />
        
        {currentView === 'home' ? (
          <>
            <Stories />
            <PostGrid posts={posts} onOpenModal={setSelectedPost} />
          </>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {/* Aquí iría tu ProfileView más detallado */}
            <h2>Vista de Perfil</h2>
            <p>Aquí se mostrarán las fotos asociadas al usuario logueado.</p>
          </div>
        )}
      </main>

      <PostModal post={selectedPost} closeModal={() => setSelectedPost(null)} />
    </div>
  );
}

export default App;