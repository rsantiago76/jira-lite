import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export default function App() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    fetch(`${API_BASE}/health`)
      .then((r) => r.json())
      .then((j) => setStatus(j.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Jira-Lite UI (Scaffold)</h1>
      <p><strong>API health:</strong> {status}</p>
      <p>Edit <code>src/App.jsx</code> to start building your UI.</p>
    </div>
  );
}
