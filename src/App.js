import { useState } from "react";
import { LoginModal } from "./Forms/LoginModal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginModal />
      </header>
    </div>
  );
}

export default App;
