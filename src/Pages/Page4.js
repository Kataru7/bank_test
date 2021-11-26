import React from "react";
import "./Page4.css";
import { NavLink } from "react-router-dom";
import { InputRadio } from "./ElementsPages/index";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import fetchDataList from "../Redux/actionList";
import fetchDataMethod from "../Redux/actionChoice";
import Papa from "papaparse";

export default function Page4() {
  const dispatch = useDispatch();

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
    <div className="personal-data-form">
      <Formik
        initialValues={{
          choiceMethod: "",
          list: "",
        }}
        onSubmit={(data) => {
          dispatch(fetchDataMethod(data.choiceMethod));
        }}
      >
        {(values, errors, isSubmitting) => (
          <Form>
            <div>
              <InputRadio
                name="choiceMethod"
                type="radio"
                value="personal"
                title="Персональная"
              />
              <InputRadio
                name="choiceMethod"
                type="radio"
                value="list"
                title="Регистрация пользователей списком"
              />
            </div>
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
            <div className="button-box">
              {values.values.choiceMethod === "personal" ? (
                <div>
                  <NavLink exact to="/registration/personal">
                    Далее
                  </NavLink>
                </div>
              ) : (
                <NavLink exact to="/registration/result">
                  Далее
                </NavLink>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
