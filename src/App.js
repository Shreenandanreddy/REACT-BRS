import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fakeCommands = [
      "[SYSTEM] Connecting to secure server...",
      "[OK] Connection established at 192.168.0.12",
      "[ACCESS] Requesting authorization token...",
      "[GRANTED] Token ID: 78F9-A12X-98KL",
      "[EXEC] Downloading encrypted data...",
      "[DECRYPT] Data decryption 85% complete...",
      "[UPLOAD] Sending files to GitHub repository...",
      "[SUCCESS] Deployment completed.",
      "[LOGOUT] Closing secure session..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < fakeCommands.length) {
        setLogs((prev) => [...prev, fakeCommands[i]]);
        i++;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="terminal">
        <h1 className="title">&gt; GitHub Deployment Terminal</h1>
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
        <p className="blink">█</p>
      </div>
    </div>
  );
}

export default App;
