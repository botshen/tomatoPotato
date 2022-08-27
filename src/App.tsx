import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "./App.css";
import { SignUpPage } from "./views/SignInPage";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </MantineProvider>
  );
}

export default App;
