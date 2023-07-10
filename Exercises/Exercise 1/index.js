import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App() {
  const name = 'Engy';

  return (
    <div>
      My name is:
      <h1>{name}</h1>
    </div>
  );
}

root.render(<App />);
