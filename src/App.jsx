import { useEffect, useState } from 'react';
import axios from 'axios';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { Stories } from './components/feed/Stories';
import { PostGrid } from './components/feed/PostGrid';
import { ProfileView } from './components/profile/ProfileView';
import { PostModal } from './components/ui/PostModal';

const captions = [
  'Modo siesta activado. #catsofinstagram',
  'Un retrato perfecto para el feed.',
  'Hoy toca mirar por la ventana.',
  'Cafe, sol y compania felina.',
  'Nueva publicacion desde el rincon favorito.',
];

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentView, setCurrentView] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=15');
        const enrichedData = response.data.map((cat, index) => ({
          ...cat,
          username: `@cat_lover_${index + 1}`,
          userAvatar: `https://i.pravatar.cc/150?img=${index + 20}`,
          likes: 420 + index * 137,
          caption: captions[index % captions.length],
          date: `${index + 1} d`,
          comments: [
            { user: '@michi_fan', text: 'Excelente foto.' },
            { user: '@feed_cats', text: 'Este post queda guardado.' },
          ],
        }));

        setPosts(enrichedData);
      } catch (fetchError) {
        setError('No se pudieron cargar las imagenes de gatos.');
        console.error('Error fetching cats:', fetchError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="app-container">
      <Sidebar currentView={currentView} setView={setCurrentView} />

      <main className="main-content">
        <TopBar />

        {currentView === 'home' ? (
          <>
            <Stories />
            <PostGrid
              posts={posts}
              isLoading={isLoading}
              error={error}
              onOpenModal={setSelectedPost}
            />
          </>
        ) : (
          <ProfileView posts={posts} onOpenModal={setSelectedPost} />
        )}
      </main>

      <PostModal post={selectedPost} closeModal={() => setSelectedPost(null)} />
    </div>
  );
}

export default App;
