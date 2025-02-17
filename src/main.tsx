import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/LoginPage';
import { Dashboard } from './dashboard';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Page de connexion par défaut */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard après connexion */}
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
