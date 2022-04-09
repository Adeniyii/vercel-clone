import React from "react";

import BaseStyles from "./BaseStyles";
import ResetStyles from "./ResetStyles";
import Landing from "../Landing";
import Header from "../shared/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
      <BaseStyles />
      <ResetStyles />
    </>
  );
};

export default App;
