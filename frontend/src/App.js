import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/test");
        setMessage(response.data.message);
        setLoading(false);
      } catch (err) {
        setError("Failed to connect to backend");
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Sports Store</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
