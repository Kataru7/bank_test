import React from "react";
import { useSelector } from "react-redux";

function ResultList() {
  const users = useSelector((state) => state.users);

  console.log(users);
  let infoList = users.map((el, index) => {
    return (
      <div key={index} className="table-info">
        <div>{el.name}</div>
        <div>{el.lastName}</div>
        <div>{el.birthday}</div>
        <div>{el.gender}</div>
        <div>{el.country}</div>
        <div>
          <a>Доп.инфо.</a>
        </div>
      </div>
    );
  });
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
          {infoList}
        </div>
        <div className="form-footer">
          <button className="submit-btn">Сохранить</button>
        </div>
      </div>
    </div>
  );
}

export default ResultList;
