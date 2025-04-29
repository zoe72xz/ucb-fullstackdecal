import React, { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("Do not watch the clock. Do what it does. Keep going.");

  const getQuote = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/quote');
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <div className="quote-container">
        <p className="quote">{quote}</p>
        <button onClick={getQuote}>Get Quote</button>
      </div>
    </div>
  );
}

export default App; 