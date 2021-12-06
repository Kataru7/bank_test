import React from "react";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import actionEditId from "../Redux/actionEditId";
import "./ResultList.css";

function ResultList() {
  let history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
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
            <div className="table-data table-output-info table-header">Имя</div>
            <div className="table-data table-output-info table-header">
              Фамилия
            </div>
            <div className="table-data table-output-info table-header">
              Отчество
            </div>
            <div className="table-data table-output-info table-header">
              Дата рождения
            </div>
            <div className="table-data table-output-info table-header gender">
              Пол
            </div>
            <div className="table-data table-output-info table-header">
              Страна
            </div>
            <div className="table-data table-output-info table-header">
              Инфо
            </div>
          </div>
          {users.map((el, id) => {
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
                  <p className="btn-change" onClick={() => changeDataUser(id)}>
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
