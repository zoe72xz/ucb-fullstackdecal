import React from 'react';

interface Quote {
  _id: string;
  content: string;
  author: string;
  tags?: string[];
  authorSlug?: string;
  length?: number;
  dateAdded?: string;
  dateModified?: string;
}

interface QuoteCardProps {
  quote: Quote;
  onTagClick?: (tag: string) => void;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, onTagClick }) => {
  return (
    <div className="quote-card">
      <p className="quote-content">{quote.content}</p>
      <p className="quote-author">- {quote.author}</p>
      {quote.tags && quote.tags.length > 0 && (
        <div className="quote-tags">
          {quote.tags.map((tag, index) => (
            <span 
              key={index} 
              className="tag"
              onClick={() => onTagClick && onTagClick(tag)}
              style={{ cursor: onTagClick ? 'pointer' : 'default' }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuoteCard; 