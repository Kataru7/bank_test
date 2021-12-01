import React from "react";
import { useSelector } from "react-redux";
import "./ResultPersonal.css";

function ResultPersonal() {
  const user = useSelector((state) => state);

  console.log(user);
  return (
    <div className="personal-data-form-container">
      <div className="personal-data-form">
        <div>
          <h4>ЛИЧНЫЕ ДАННЫЕ</h4>
        </div>
        <div className="table-container">
          <div className="table-info">
            <div>Имя</div>
            <div>Отчество</div>
            <div>Дата рождения</div>
            <div>Пол</div>
            <div>Страна</div>
            <div>Инфо</div>
          </div>
          <div className="table-info">
            <div>{user.name}</div>
            <div>{user.lastName}</div>
            <div>{user.birthday}</div>
            <div>{user.gender}</div>
            <div>{user.country}</div>
            <div>
              <a>Доп.инфо.</a>
            </div>
          </div>
        </div>
        <div className="form-footer">
          <button className="submit-btn">Сохранить</button>
        </div>
      </div>
    </div>
  );
}

export default ResultPersonal;
