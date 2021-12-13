import React from "react";
import "./MainFormHeader.css";
import { NavLink } from "react-router-dom";

export default function MainForm() {
  return (
    <div className="form-container">
      <div className="form-header-conteiner">
        <h2 className="form-header">Типовая форма</h2>
      </div>
      <div className="form-steps">
        <NavLink
          className="forms-wrap__link"
          activeClassName="forms-wrap__link--active"
          exact
          to="/registration/personal/"
        >
          Личные данные
        </NavLink>
        <NavLink
          className="forms-wrap__link"
          activeClassName="forms-wrap__link--active"
          exact
          to="/registration/card/"
        >
          Данные кредитной кары
        </NavLink>
        <NavLink
          className="forms-wrap__link"
          activeClassName="forms-wrap__link--active"
          exact
          to="/registration/personal-result/"
          to="/registration/list-result"
        >
          Результат
        </NavLink>
      </div>
    </div>
  );
}
