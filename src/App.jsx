import React from 'react';
import Home from './pages/Home';

// Import global styles
import './index.css';
import './assets/styles/theme.css';

function App() {
  return (
    <div className="app-container">
      {/* You can add a Header or Navbar here if needed in the future */}
      <main>
        <Home />
      </main>
      
      <footer className="app-footer">
        <p>Built with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;