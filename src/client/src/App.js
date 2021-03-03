import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    console.log('App loaded');
  }, []);

  return (
    <div>Hello React</div>
  );
}

export default App