import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(''); // New state for displaying messages

  const handleIncrease = () => {
    setMessage(''); // Clear any previous messages
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) { // Prevent counter from going below zero
      setMessage(''); // Clear any previous messages
      setCount(count - 1);
    } else {
      setMessage("Cannot go below zero!"); // Set a message if trying to go below zero
    }
  };

  // Optional: Display a message if the counter reaches a certain threshold
  const MAX_COUNT = 10; // Define a maximum count
  if (count >= MAX_COUNT && message === '') { // Only set message once
    setMessage(`You've reached the maximum count of ${MAX_COUNT}!`);
  } else if (count < MAX_COUNT && message.includes('maximum count')) {
    // Clear message if count goes below max after reaching it
    setMessage('');
  }


  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Simple Counter</h1>
      <p style={styles.countText}>Current Count: {count}</p>
      <div style={styles.buttonContainer}>
        <button onClick={handleIncrease} style={styles.button}>
          Increase
        </button>
        <button onClick={handleDecrease} style={styles.button}>
          Decrease
        </button>
      </div>
      {/* Display messages */}
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

// Basic styling using a JavaScript object
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '50px',
    backgroundColor: '#f4f4f4',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '50px auto', // Center the container
  },
  title: {
    color: '#333',
    fontSize: '2.5em',
    marginBottom: '20px',
  },
  countText: {
    fontSize: '3em',
    color: '#007bff',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  buttonContainer: {
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    margin: '0 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.2em',
    transition: 'background-color 0.3s ease',
  },
  message: {
    color: '#dc3545', // Red color for error messages
    fontSize: '1.1em',
    fontWeight: 'bold',
    marginTop: '20px',
  }
};


export default App;
