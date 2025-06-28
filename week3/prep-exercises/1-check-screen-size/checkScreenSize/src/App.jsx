import React from 'react';
import useWindowSize from './useWindowSize';

function App() {
  const sizeMain = useWindowSize('');
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Window Size Tracker</h1>
      <p><strong>Window size:</strong> {sizeMain.width} x {sizeMain.height}</p>
    </div>
  );
}

export default App;
