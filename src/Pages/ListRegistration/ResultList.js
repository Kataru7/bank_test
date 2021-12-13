import React, { useState } from "react";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase-config";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import actionEditId from "../../Redux/actionEditId";
import "./ResultList.css";

function ResultList() {
  let history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [arr, setArr] = useState(users);

  const sortData = (e) => {
    const choiceEvent = {
      Имя: "name",
      Фамилия: "lastName",
      Отчество: "patronymic",
      "Дата рождения": "birthday",
      Пол: "gender",
      Страна: "country",
    };
    let eventTarget = choiceEvent[e.target.innerHTML];
    const obj = [...arr];
    const sortArr = obj.sort((a, b) =>
      a[eventTarget] > b[eventTarget] ? 1 : -1
    );
    setArr(sortArr);
  };
  const dataTransfer = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "data_registration"));
      querySnapshot.forEach((doc) => {
        doc.data();
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const changeDataUser = (id) => {
    dispatch(actionEditId(`${id}`));
    history.push("/registration/personal");
  };

  return (
    <div className="personal-data-form-container">
      <div className="personal-data-form">
        <div className="table-container">
          <div className="table-info">
            <div
              className="table-data table-output-info table-header"
              onClick={(e) => sortData(e)}
            >
              Имя
            </div>
            <div
              className="table-data table-output-info table-header"
              onClick={(e) => sortData(e)}
            >
              Фамилия
            </div>
            <div
              className="table-data table-output-info table-header"
              onClick={(e) => sortData(e)}
            >
              Отчество
            </div>
            <div
              className="table-data table-output-info table-header"
              onClick={(e) => sortData(e)}
            >
              Дата рождения
            </div>
            <div
              className="table-data table-output-info table-header gender"
              onClick={(e) => sortData(e)}
            >
              Пол
            </div>
            <div
              className="table-data table-output-info table-header"
              onClick={(e) => sortData(e)}
            >
              Страна
            </div>
            <div className="table-data table-output-info table-header">
              Инфо
            </div>
          </div>
          {arr.map((el, id) => {
            return (
              <div key={id} className="table-info">
                <div className="table-data table-output-info tr-element">
                  {el.name}
                </div>
                <div className="table-data table-output-info tr-element">
                  {el.lastName}
                </div>
                <div className="table-data table-output-info tr-element">
                  {el.patronymic}
                </div>
                <div className="table-data table-output-info tr-element">
                  {el.birthday}
                </div>
                <div className="table-data table-output-info tr-element gender">
                  {el.gender}
                </div>
                <div className="table-data table-output-info tr-element">
                  {el.country}
                </div>
                <div className="table-data table-output-info tr-element">
                  <p
                    className="btn-change"
                    onClick={() => changeDataUser(el.id)}
                  >
                    Править
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="form-footer">
          <button className="submit-btn" onClick={dataTransfer}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultList;
