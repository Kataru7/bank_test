import React from "react";
import { useSelector } from "react-redux";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";
import { useDispatch } from "react-redux";
import fetchDataList from "../Redux/actionList";
import { useHistory } from "react-router-dom";
import actionEditId from "../Redux/actionEditId";

function ResultList() {
  let history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const dataTransfer = async () => {
    try {
      const docRef = await addDoc(collection(db, "data_registration"), {
        users,
      });
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
          {console.log(users)}
          {users.map((el, id) => {
            return (
              <div key={id} className="table-info">
                <div className="table-data">{el.name}</div>
                <div className="table-data">{el.lastName}</div>
                <div className="table-data">{el.birthday}</div>
                <div className="table-data">{el.gender}</div>
                <div className="table-data">{el.country}</div>
                <div className="table-data">
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
