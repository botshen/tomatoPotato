import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { SignUpPage } from "./views/SignInPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
