import React from "react";
//import { Router } from "react-router-dom";
import Header from "./Header";

const App = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default App;
