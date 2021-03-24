import React from "react";

export default function Home() {
  const name = localStorage.getItem("username");
  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
}
