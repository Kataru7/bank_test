import React from "react";
import "./Page4.css";
import { NavLink } from "react-router-dom";

export default function Page4() {
  return (
    <div className="main-form-container">
      <div>
        <h3>Выберете способ регистрацци:</h3>
        <ul>
          <li>
            <input type="radio" id="person" name="interest" value="person" />
            <label htmlFor="person">Песональная</label>
          </li>
          <li>
            <input type="radio" id="allList" name="interest" value="allList" />
            <label htmlFor="allList">Регистрация пользователей списком</label>
          </li>
          <li></li>
          <li>
            <NavLink to="/registration/personal">ok</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
