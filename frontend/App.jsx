import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import InteractionForm from './components/InteractionForm';
import SalesUpload from './components/SalesUpload';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [view, setView] = useState('dashboard');

  if (!token) return <Login onLogin={setToken} />;

  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        <button onClick={() => setView('dashboard')}>Dashboard</button>
        <button onClick={() => setView('log')}>Log Interaction</button>
        <button onClick={() => setView('upload')}>Upload Sales</button>
        <button onClick={() => { localStorage.removeItem('token'); setToken(null); }}>Logout</button>
      </nav>
      <main style={{ padding: '1rem' }}>
        {view === 'dashboard' && <Dashboard />}
        {view === 'log' && <InteractionForm token={token} />}
        {view === 'upload' && <SalesUpload token={token} />}
      </main>
    </div>
  );
};

export default App;
