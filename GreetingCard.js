import React, { useState } from "react";

export default function GreetingCard() {
  const [msg, setMsg] = useState("hello guys");
  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={() => setMsg("Welcome to LetsUpgrade")}>
        Change message here
      </button>
    </div>
  );
}
