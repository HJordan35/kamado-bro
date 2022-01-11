import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import "./App.css";
import { GlobalStyle } from "elements/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
