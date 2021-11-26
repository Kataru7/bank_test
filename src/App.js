import React from "react";
import { Footer, Chat } from "./Pages/ElementsPages/index";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import {
  CreditCardData,
  MainForm,
  Page4,
  PersonalData,
  Result,
} from "./Pages/index";

export default function App() {
  return (
    <div className="container">
      <div className="nav">
        <h1 className="nav-one">Городской сайт</h1>
        <div className="nav-two">
          <ul className="nav-list-container">
            <li>
              <NavLink to="/registration">Пункт 1</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Пункт 2</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Пункт 3</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Пункт 4</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Пункт 5</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path="/registration">
          <Page4 />
        </Route>
        <div className="wrapper-registrations">
          <div>
            <MainForm />
            <Route exact path="/registration/personal">
              <PersonalData />
            </Route>
            <Route exact path="/registration/card">
              <CreditCardData />
            </Route>
            <Route exact path="/registration/result">
              <Result />
            </Route>
            <Chat />
          </div>
        </div>
      </Switch>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
