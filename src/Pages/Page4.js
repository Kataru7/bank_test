import React from "react";
import "./Page4.css";
import { useHistory } from "react-router-dom";
import { InputRadio } from "./ElementsPages/index";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import fetchDataList from "../Redux/actionList";
import fetchDataMethod from "../Redux/actionChoice";
import Papa from "papaparse";

export default function Page4() {
  const dispatch = useDispatch();
  let history = useHistory();

  let open = function (event) {
    let input = event.target.files[0];
    let readerObj = new FileReader();
    readerObj.onload = function () {
      let fileText = readerObj.result;
      let results = Papa.parse(fileText, { header: true });
      dispatch(fetchDataList(results.data));
    };
    readerObj.readAsText(input);
  };

  return (
    <div className="choice-registration">
      <div className="choice-registration-item">
        <p>Выберите способ регистрации:</p>
      </div>

      <Formik
        initialValues={{
          choiceMethod: "",
          list: "",
        }}
        onSubmit={(data) => {
          dispatch(fetchDataMethod(data.choiceMethod));
          if (data.choiceMethod === "personal") {
            history.push("/registration/personal");
          } else if (data.choiceMethod === "list") {
            history.push("/registration/list-result");
          }
        }}
      >
        {(values) => (
          <Form className="choice-registration-form">
            <div className="choice-registration-item radio">
              <InputRadio
                name="choiceMethod"
                type="radio"
                value="personal"
                title="Персональная"
              />
            </div>
            <div className="choice-registration-item radio">
              <InputRadio
                name="choiceMethod"
                type="radio"
                value="list"
                title="Регистрация пользователей списком"
              />
            </div>

            <div className="choice-registration-item button">
              {values.values.choiceMethod === "list" && (
                <label
                  className="start-reg-page__load-label"
                  htmlFor="csv-uploads"
                >
                  <div className="start-reg-page__load-title">
                    Загрузить список
                  </div>
                  <input
                    className="start-reg-page__load-input"
                    name="csv-uploads"
                    id="csv-uploads"
                    type="file"
                    accept=".csv"
                    onChange={(e) => open(e)}
                  />
                </label>
              )}
              {values.values.choiceMethod === "personal" ? (
                <input className="submit-btn reg" type="submit" value="Далее" />
              ) : (
                <input className="submit-btn reg" type="submit" value="Далее" />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
