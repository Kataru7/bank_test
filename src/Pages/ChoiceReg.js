import React from "react";

export default function ChoiceReg() {
  return (
    <div>
      <h3>Выберете способ регистрацци:</h3>
      <ul>
        <li>
          <input
            type="radio"
            id="person"
            name="interest"
            value="person"
            checked
          />
          <label for="person">Песональная</label>
        </li>
        <li>
          <input type="radio" id="allList" name="interest" value="allList" />
          <label for="allList">Регистрация пользователей списком</label>
        </li>
        <li></li>
        <li>
          <button>ok</button>
        </li>
      </ul>
    </div>
  );
}
