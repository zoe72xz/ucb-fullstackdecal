import { useEffect, useState } from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";

interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
}

export default function Home() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get<Quote>("http://api.quotable.io/random");
      console.log("API Response:", response.data);
      setQuote(response.data);
    } catch (err) {
      console.error("Error fetching quote:", err);
      setError("Failed to fetch quote. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const likeQuote = () => {
    if (!quote) return;
    
    const existingFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (existingFavorites.some((f: Quote) => f._id === quote._id)) {
      alert("This quote is already in your favorites!");
      return;
    }
    
    existingFavorites.push(quote);
    localStorage.setItem('favorites', JSON.stringify(existingFavorites));
    alert("Added to favorites!");
  };

  return (
    <div>
      <h1>Quote of the Day</h1>
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        quote && <QuoteCard quote={quote} />
      )}
      <div className="button-group">
        <button onClick={fetchQuote} disabled={loading}>
          {loading ? "Loading..." : "Get New Quote"}
        </button>
        <button onClick={likeQuote} disabled={!quote || loading}>
          Add to Favorites
        </button>
      </div>
    </div>
  );
}
