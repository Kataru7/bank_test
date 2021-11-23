import React from "react";
import { Footer } from "./Pages/ElementsPages/index";
import Page4 from "./Pages/Page4";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="nav">
        <h1 className="nav-one">Городской сайт</h1>
        <div className="nav-two">
          <ul className="nav-list-container">
            <li>Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li>
            <li>Пункт 4</li>
            <li>Пункт 5</li>
          </ul>
        </div>
      </div>
      <div className="content"></div>
      <Page4 />

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
