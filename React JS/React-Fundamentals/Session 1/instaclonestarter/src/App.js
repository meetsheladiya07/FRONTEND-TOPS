import React from 'react';
import TrendingSong from './TrendingSong';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React Zomato App</h1>
      <TrendingSong />
    </div>
  );
}

export default App;

// React's Virtual DOM creates a lightweight copy of the real DOM in memory. When something changes, React compares the new Virtual DOM with the previous one and finds only the changed parts. It then updates only those parts in the real DOM instead of rebuilding the entire page. This reduces unnecessary DOM operations and makes UI updates faster and more efficient.