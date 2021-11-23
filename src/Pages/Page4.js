import React from "react";
import { useState } from "react";
import { MainForm } from ".";
import "./Page4.css";

export default function Page4() {
  let [val, setVal] = useState();
  let [rend, setRend] = useState();

  let changeVal = (event) => {
    setVal(event.target.value);
  };

  let rendering = () => {
    val === "person" ? setRend(true) : setRend(false);
  };

  return (
    <div className="main-form-container">
      {rend ? (
        <MainForm />
      ) : (
        <div>
          <h3>Выберете способ регистрацци:</h3>
          <ul>
            <li>
              <input
                type="radio"
                id="person"
                name="interest"
                value="person"
                onChange={changeVal}
              />
              <label htmlFor="person">Песональная</label>
            </li>
            <li>
              <input
                type="radio"
                id="allList"
                name="interest"
                value="allList"
                onChange={changeVal}
              />
              <label htmlFor="allList">Регистрация пользователей списком</label>
            </li>
            <li></li>
            <li>
              <button onClick={rendering}>ok</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
