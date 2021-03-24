import React from "react";
import { useHistory } from "react-router-dom";

export default function NetworkError() {
  let history = useHistory();

  const handleBack = () => {
    history.goBack();
  };
  return (
    <div>
      <h1>Network Error has Occured!!</h1>

      <button onClick={handleBack}>Go Back</button>
    </div>
  );
}
