import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Page1, Page2, Page3, Page4, Page5 } from "./Pages/index";
import { Footer } from "./Pages/ElementsPages/index";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="nav">
        <h1 className="nav-one">Городской сайт</h1>
        <div className="nav-two">
          <ul className="nav-list-container">
            <li>
              {" "}
              <NavLink className="link link-one" to={"/"}>
                Пункт 1
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="link link-two" to={"/page2"}>
                Пункт 2
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="link link-three" to={"/page3"}>
                Пункт 3
              </NavLink>
            </li>
            <li>
              <NavLink className="link link-four" to={"/page4"}>
                Пункт 4
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="link link-five" to={"/page5"}>
                Пункт 5
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
