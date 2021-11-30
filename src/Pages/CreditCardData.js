import React from "react";
import { Formik, Form } from "formik";
import { NavLink, useHistory } from "react-router-dom";
import { Input, InputRadio } from "./ElementsPages/index";
// import * as yup from "yup";
import { useDispatch } from "react-redux";
import fetchData from "../Redux/action";

export default function PersonalDataF() {
  // const validationSchema = yup.object().shape({
  //   name: yup.string().typeError("Введите строку").required("Обязательна"),
  // });
  const dispatch = useDispatch();
  let history = useHistory();

  return (
    <Formik
      initialValues={{
        numberCard: "",
        monthYear: "",
        cvc: "",
        typeCard: "",
      }}
      validateOnBlur
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        dispatch(fetchData(data));
        history.push("personal-result");
      }}

      // validationSchema={validationSchema}
    >
      {({ values, isSubmitting }) => (
        <div className="personal-data-form">
          <Form className="data-form">
            <div className="data-form-title">
              Все поля обязательны для заполнения
            </div>
            <Input
              type="text"
              name="numberCard"
              label="Номер карты:"
              value={values.name}
            />
            <Input
              type="text"
              name="monthYear"
              label="Месяц/год:"
              value={values.monthYear}
            />
            <Input
              maxLength={3}
              type="password"
              name="cvc"
              label="CVC2 или CVV2:"
              value={values.cvc}
            />
            <InputRadio
              name="typeCard"
              type="radio"
              value="debet"
              title="Дебетовая"
            />
            <InputRadio
              name="typeCard"
              type="radio"
              value="credit"
              title="Кредитная"
            />

            <button disabled={isSubmitting} type="submit">
              Далее
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
