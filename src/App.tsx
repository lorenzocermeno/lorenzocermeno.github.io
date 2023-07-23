import React from "react";
import "./App.css";
import { About } from "./components/About/About";
import { Links } from "./components/Links/Links";
import { Projects } from "./components/Projects";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box marginTop={4}>
          <About />
          <Projects />
          <Links />
        </Box>
      </header>
    </div>
  );
}

export default App;
