import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      fontFamily: "'Segoe UI', sans-serif",
      color: '#fff'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 12px', letterSpacing: '-1px' }}>
          Hello Devops
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#a0aec0', margin: '0 0 24px' }}>
          Deployed via GitHub Actions CI/CD Pipeline
        </p>
        <div style={{
          display: 'inline-block',
          padding: '6px 16px',
          background: '#28a745',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: '600',
          letterSpacing: '0.5px'
        }}>
          {process.env.REACT_APP_ENV || 'production'} environment
        </div>
      </div>
    </div>
  );
}

export default App;
