import React from "react";
import { Formik, Form } from "formik";
import "./PersonalData.css";
import { Input, InputSelect } from "./ElementsPages/index";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import fetchData from "../Redux/action";

export default function PersonalDataF() {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    friendEmail: yup.string().email().required(),
  });
  const genderSelect = [
    { value: { select: "Male", titleSelect: "Муж" } },
    { value: { select: "Female", titleSelect: "Жен" } },
    { value: { select: "Other", titleSelect: "Другое" } },
  ];
  const countrySelect = [
    { value: { select: "Беларусь", titleSelect: "Беларусь" } },
    { value: { select: "Россия", titleSelect: "Россия" } },
    { value: { select: "Украина", titleSelect: "Украина" } },
  ];
  const footbalSelect = [
    { value: { select: "Barselona", titleSelect: "Барселона" } },
    { value: { select: "Real-Madrid", titleSelect: "Реал-Мадрид" } },
    { value: { select: "Marsel", titleSelect: "Марсель" } },
    { value: { select: "Manchester", titleSelect: "Манчестер" } },
    { value: { select: "Juventus", titleSelect: "Ювентус" } },
    { value: { select: "Liverpul", titleSelect: "Ливерпуль" } },
  ];
  const panSelect = [
    { value: { select: "Tefal", titleSelect: "Tefal" } },
    { value: { select: "Rondel", titleSelect: "Rondel" } },
    { value: { select: "Alesia", titleSelect: "Алеся" } },
  ];

  return (
    <div className="personal-data-form">
      <Formik
        validateOnChange={true}
        initialValues={{
          name: "",
          lastName: "",
          patronymic: "",
          birthday: "",
          gender: "",
          country: "",
          adress: "",
          motherMaidenName: "",
          codeWord: "",
          aboutUs: "",
          friendEmail: "",
          tel: "",
          footbal: "",
          pan: "",
        }}
        validateOnBlur
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(fetchData(data));
        }}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting }) => (
          <Form className="data-form">
            <div className="data-form-title">
              Все поля обязательны для заполнения
            </div>
            <Input type="text" name="name" label="Имя:" value={values.name} />
            <Input
              type="text"
              name="lastName"
              label="Фамилия:"
              value={values.lastName}
            />
            <Input
              type="text"
              name="patronymic"
              label="Отчество:"
              value={values.patronymic}
            />
            <Input
              nameClass="data-birthday"
              type="date"
              name="birthday"
              label="Дата рождения:"
              value={values.birthday}
            />
            <InputSelect
              name="gender"
              label="Пол:"
              value={values.gender}
              options={genderSelect}
            />
            <InputSelect
              name="country"
              label="Страна проживания:"
              value={values.country}
              options={countrySelect}
            />
            <Input
              type="text"
              name="adress"
              label="Адрес:"
              value={values.adress}
            />
            <Input
              type="text"
              name="motherMaidenName"
              label="Девичья фамилия матери:"
              value={values.motherMaidenName}
            />
            <Input
              type="text"
              name="codeWord"
              label="Кодовое слово в вашем банке:"
              value={values.codeWord}
            />
            <Input
              nameClass="text-aria"
              component="textarea"
              type="textarea"
              name="aboutUs"
              label="Как вы узнали о нашем сайте:"
              rows="5"
              cols="30"
              value={values.aboutUs}
              as="textarea"
            />
            <Input
              type="email"
              name="friendEmail"
              label="Email друга:"
              value={values.friendEmail}
            />
            <InputSelect
              name="footbal"
              label="За какую футбольную команду болеешь:"
              value={values.footbal}
              options={footbalSelect}
            />
            <InputSelect
              name="pan"
              label="Какую сковороду предпочитаешь:"
              value={values.pan}
              options={panSelect}
            />
            <button disabled={isSubmitting} type="submit">
              Далее
            </button>
            <NavLink to="card">Далее</NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
}
