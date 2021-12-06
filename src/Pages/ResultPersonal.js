import React from "react";
import { useSelector } from "react-redux";
import "./ResultPersonal.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";
import { PopUp } from "./ElementsPages/index";

function ResultPersonal() {
  const user = useSelector((state) => state);
  const dataTransfer = async () => {
    try {
      const docRef = await addDoc(collection(db, "data_registration"), {
        ...user,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="personal-data-form-container">
      <div className="personal-data-form">
        <div>
          <h4>ЛИЧНЫЕ ДАННЫЕ</h4>
        </div>
        <div className="table-container">
          <div className="table-info">
            <div className="table-output-info table-header">Имя</div>
            <div className="table-output-info table-header">Отчество</div>
            <div className="table-output-info table-header">Дата рождения</div>
            <div className="table-output-info table-header">Пол</div>
            <div className="table-output-info table-header">Страна</div>
            <div className="table-output-info table-header">Инфо</div>
          </div>
          <div className="table-info">
            <div className="table-output-info">{user.name}</div>
            <div className="table-output-info">{user.lastName}</div>
            <div className="table-output-info">{user.birthday}</div>
            <div className="table-output-info">{user.gender}</div>
            <div className="table-output-info">{user.country}</div>
            <div className="table-output-info popUp">
              <p className="popUp">Доп.инфо.</p>
              {<PopUp user={user} />}
            </div>
          </div>
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

export default ResultPersonal;
