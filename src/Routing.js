import React from "react";
import { Footer, Chat } from "./Pages/ElementsPages/index";
import "./Routing.css";
import { Switch, Route, NavLink } from "react-router-dom";
import {
  CreditCardData,
  MainForm,
  Page4,
  PersonalData,
  ResultPersonal,
  ResultList,
  Page1,
  Page2,
  Page3,
  Page5,
} from "./Pages/index";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import fetchSingIn from "./Redux/actionSingIn";
import { auth } from "./Firebase/firebase-config";
import { useHistory } from "react-router-dom";

export default function Routing() {
  let history = useHistory();
  const dispatch = useDispatch();
  const userSingIn = useSelector((state) => state.singInUser);
  const singOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(fetchSingIn(false));
        history.push("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="container">
      <div className="nav">
        <h1 className="nav-one">Городской сайт</h1>
        <div className="nav-two">
          <ul className="nav-list-container">
            <li>
              <NavLink to="/1">Пункт 1</NavLink>
            </li>
            <li>
              <NavLink to="/2">Пункт 2</NavLink>
            </li>
            <li>
              <NavLink to="/3">Пункт 3</NavLink>
              <div>{console.log(userSingIn)}</div>
            </li>
            <li>
              <NavLink to="/registration">Пункт 4</NavLink>
            </li>
            <li>
              <NavLink to="/4">Пункт 5</NavLink>
            </li>
            {userSingIn ? (
              <li>
                <button onClick={singOutUser}>Выход</button>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path="/1">
          <Page1 />
        </Route>
        <Route exact path="/2">
          <Page2 />
        </Route>
        <Route exact path="/3">
          <Page3 />
        </Route>

        <Route exact path="/registration">
          <Page4 />
        </Route>
        <div className="wrapper-registrations">
          <React.Fragment>
            <MainForm />
            <Route exact path="/registration/personal">
              <PersonalData />
            </Route>
            <Route exact path="/registration/card">
              <CreditCardData />
            </Route>
            <Route exact path="/registration/personal-result">
              <ResultPersonal />
            </Route>
            <Route exact path="/registration/list-result">
              <ResultList />
            </Route>
            <>
              <Chat />
            </>
          </React.Fragment>
        </div>

        <Route exact path="/5">
          <Page5 />
        </Route>
      </Switch>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
