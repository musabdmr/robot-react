import React from "react";
import axios from "axios";

const App = () => {
  const sendMessage = (message) => {
    const URL = "http://localhost:8080/api/messages";
    const body = { message: message };

    axios
      .post(URL, body)
      .then((response) => {
        console.log("Message sent:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // alt + shift + f code format shortcut

  return (
    <div>
      <button onClick={() => sendMessage("0")}>Dur</button>
      <button onClick={() => sendMessage("1")}>Ileri</button>
      <button onClick={() => sendMessage("2")}>Sağ</button>
      <button onClick={() => sendMessage("3")}>Geri</button>
      <button onClick={() => sendMessage("4")}>Sol</button>
    </div>
  );
};

export default App;
