import React, { useState } from 'react'; // Importing React and useState hook for state management
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS for styling
import './App.css'; // Importing custom CSS file for additional styles

// QuoteGenerator component is responsible for generating and displaying random quotes
const QuoteGenerator = () => {
  // Array of quotes with text and author
  const quotes = [
    {
      text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
      author: "Johann Wolfgang von Goethe"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      text: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "To live is to suffer, to survive is to find some meaning in the suffering.",
      author: "Friedrich Nietzsche"
    },
    {
      text: "The unexamined life is not worth living.",
      author: "Socrates"
    },
    {
      text: "Get busy living or get busy dying.",
      author: "Stephen King"
    }
  ];

  // useState hook initializes currentQuote with a random quote from the quotes array
  const [currentQuote, setCurrentQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  // Function to handle changing to a new random quote
  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Generate a random index
    setCurrentQuote(quotes[randomIndex]); // Update the state with a new random quote
  };

  // Function to generate Twitter share URL with the current quote
  const getTwitterShareUrl = () => {
    return `https://twitter.com/intent/tweet?text="${currentQuote.text}" - ${currentQuote.author}`;
  };

  // Function to generate Tumblr share URL with the current quote
  const getTumblrShareUrl = () => {
    return `https://www.tumblr.com/share/quote?text="${currentQuote.text}"%20- ${currentQuote.author}`;
  };

  // JSX for rendering the quote generator
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center p-5 border rounded shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
        <h1 className="mb-4">Random Quote Machine</h1>
        <p className="quote-text mb-4">{currentQuote.text}</p> {/* Display the current quote text */}
        <p className="author-name">- {currentQuote.author}</p> {/* Display the current quote author */}

        {/* Buttons row */}
        <div className="d-flex justify-content-between align-items-center">
          {/* Share Buttons */}
          <div>
            {/* Twitter share button */}
            <a
              href={getTwitterShareUrl()} // Generate Twitter share URL
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice for opening external links
              className="btn btn-info mr-2" // Bootstrap button style for Twitter
              data-toggle="tooltip" // Tooltip for hover effect
              data-placement="top" // Tooltip position
              title="Tweet this quote!" // Tooltip text
            >
              <i className="fab fa-twitter"></i> {/* FontAwesome Twitter icon */}
            </a>
            {/* Tumblr share button */}
            <a
              href={getTumblrShareUrl()} // Generate Tumblr share URL
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice for opening external links
              className="btn btn-dark" // Bootstrap button style for Tumblr
              data-toggle="tooltip" // Tooltip for hover effect
              data-placement="top" // Tooltip position
              title="Post this quote on Tumblr!" // Tooltip text
            >
              <i className="fab fa-tumblr"></i> {/* FontAwesome Tumblr icon */}
            </a>
          </div>

          {/* New Quote Button */}
          <button className="btn btn-primary ml-auto" onClick={handleNewQuote}>New Quote</button> {/* Button to get a new random quote */}
        </div>
      </div>
    </div>
  );
};

// Main App component that includes the QuoteGenerator component
const App = () => {
  return (
    <div className="App">
      <QuoteGenerator /> {/* Render the QuoteGenerator component */}
    </div>
  );
};

// Export the App component as the default export
export default App;
