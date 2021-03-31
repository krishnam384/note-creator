// import axios from "axios";
import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Home() {
  const name = localStorage.getItem("username");
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    history.push("/signup");
  };
  return (
    <div>
      <h1>Welcome {name}</h1>
      <Button onClick={handleLogOut}>Log Out</Button>
    </div>
  );
}
