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
    { value: { gender: "Male", titleGender: "Муж" } },
    { value: { gender: "Female", titleGender: "Жен" } },
    { value: { gender: "Other", titleGender: "Другое" } },
  ];
  const footbalSelect = [
    { value: { gender: "Barselona", titleGender: "Барселона" } },
    { value: { gender: "Real-Madrid", titleGender: "Реал-Мадрид" } },
    { value: { gender: "Marsel", titleGender: "Марсель" } },
    { value: { gender: "Manchester", titleGender: "Манчестер" } },
    { value: { gender: "Juventus", titleGender: "Ювентус" } },
    { value: { gender: "Liverpul", titleGender: "Ливерпуль" } },
  ];
  const panSelect = [
    { value: { gender: "Tefal", titleGender: "Tefal" } },
    { value: { gender: "Rondel", titleGender: "Rondel" } },
    { value: { gender: "Alesia", titleGender: "Алеся" } },
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
              name="gender"
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
