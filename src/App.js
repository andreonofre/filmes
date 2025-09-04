// src/App.js
import React from "react";
import GlobalStyle from "../src/Global/Styles/GlobalStyles.js"; // ajuste o caminho se necessário
import RoutesApp from "./Router/router.js";


function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesApp />
    </>
  );
}

export default App;
