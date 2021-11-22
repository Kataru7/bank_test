import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonNext } from "./ElementsPages";

export default function Page4() {
  return (
    <div>
      <h3>Выберете способ регистрацци:</h3>
      <ul>
        <li>
          <input type="radio" id="person" name="interest" value="person" />
          <label for="person">Песональная</label>
        </li>
        <li>
          <input type="radio" id="allList" name="interest" value="allList" />
          <label for="allList">Регистрация пользователей списком</label>
        </li>
        <li></li>
        <li>
          <ButtonNext />
        </li>
      </ul>
    </div>
  );
}
