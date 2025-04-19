const quotes = [
  {
    text: "No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.",
    author: "Taylor Swift",
  },
  {
    text: "Don't you ever let a soul in the world tell you that you can't be exactly who you are.",
    author: "Lady Gaga",
  },
  {
    text: "Just be yourself, there is no one better.",
    author: "Taylor Swift",
  },
  {
    text: "I'm beautiful in my way 'cause God makes no mistakes. I'm on the right track, baby, I was born this way.",
    author: "Lady Gaga",
  },
];

function getRandomQuote(currentIndex) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === currentIndex);
  return newIndex;
}

function App() {
  const [index, setIndex] = React.useState(0);
  const currentQuote = quotes[index];

  const handleNewQuote = () => {
    const nextIndex = getRandomQuote(index);
    setIndex(nextIndex);
  };

  return (
    <div id="quote-box" style={{ padding: '2rem', maxWidth: '500px', margin: '50px auto', borderRadius: '12px', backgroundColor: '#f9f9f9', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
      <p id="text" style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>"{currentQuote.text}"</p>
      <p id="author" style={{ textAlign: 'right', marginTop: '1rem', fontWeight: 'bold' }}>– {currentQuote.author}</p>
      <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${currentQuote.text}" – ${currentQuote.author}`)}`}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none', color: '#1DA1F2' }}
        >
          Tweet
        </a>
        <button id="new-quote" onClick={handleNewQuote} style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', backgroundColor: '#e1306c', color: '#fff', fontWeight: 'bold' }}>
          New Quote
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
