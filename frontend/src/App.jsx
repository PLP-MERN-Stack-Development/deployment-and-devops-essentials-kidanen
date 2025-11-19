// frontend/src/App.jsx
import React, { useEffect, useState } from 'react';
import { getHealth } from './api';

export default function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    getHealth().then(setHealth).catch(() => setHealth({ status: 'unreachable' }));
  }, []);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>MERN App — Deployment Demo</h1>
      <p>Simple frontend that pings backend health endpoint.</p>
      <pre>{JSON.stringify(health, null, 2)}</pre>
    </div>
  );
}
