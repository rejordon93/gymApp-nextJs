"use client";
import { useState } from "react";

export default function Page() {
  const [haiku, setHaiku] = useState("");

  async function fetchHaiku() {
    try {
      const response = await fetch("/api/chatGbt");
      const data = await response.json();
      setHaiku(data.haiku);
    } catch (error) {
      console.error("Error fetching haiku:", error);
      setHaiku("Failed to fetch haiku.");
    }
  }

  return (
    <div>
      <h1>Haiku Generator</h1>
      <button onClick={fetchHaiku}>Generate Haiku</button>
      {haiku && <p>{haiku}</p>}
    </div>
  );
}
