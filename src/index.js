import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact/Contact";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
