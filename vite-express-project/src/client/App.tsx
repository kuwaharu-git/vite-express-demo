import "./App.css";

import { useEffect, useState } from "react";

import reactLogo from "./assets/react.svg";
import { io } from "socket.io-client";

let socket: any;

function App() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const socketUrl = "http://localhost:3000/ws";

  useEffect(() => {
    socket = io(socketUrl, { withCredentials: true });
    socket.on("connect", () => {
      console.log("Connected to server with ID:", socket.id);
    });

    socket.on("connect_error", (err: any) => {
      console.error("Connection error:", err);
    });

    socket.on("message", (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("message", input);
      setInput("");
    }
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>Chat Application</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
