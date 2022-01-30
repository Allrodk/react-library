import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/Home";
import Register from "./components/Register/Register";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

axios.defaults.baseURL = "https://library-api-gcb.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
