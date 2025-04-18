import { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard";

interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = () => {
    try {
      setLoading(true);
      setError(null);
      const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavorites(storedFavorites);
    } catch (err) {
      setError("Failed to fetch favorites. Please try again later.");
      console.error("Error fetching favorites:", err);
    } finally {
      setLoading(false);
    }
  };

  const removeFavorite = (id: string) => {
    try {
      const updatedFavorites = favorites.filter(quote => quote._id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } catch (err) {
      alert("Failed to remove from favorites. Please try again later.");
      console.error("Error removing favorite:", err);
    }
  };

  return (
    <div>
      <h1>Favorite Quotes</h1>
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : favorites.length === 0 ? (
        <p className="no-favorites">No favorite quotes yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((quote) => (
            <div key={quote._id} className="favorite-item">
              <QuoteCard quote={quote} />
              <button 
                onClick={() => removeFavorite(quote._id)}
                className="remove-button"
                aria-label="Remove from favorites"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
