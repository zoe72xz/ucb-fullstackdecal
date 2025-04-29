interface Quote {
    content: string;
    author: string;
  }
  
  export default function QuoteCard({ quote }: { quote: Quote }) {
    return (
      <div style={{ padding: "1rem", border: "1px solid #ccc", marginTop: "1rem" }}>
        <p>"{quote.content}"</p>
        <p><strong>- {quote.author}</strong></p>
      </div>
    );
  }
  