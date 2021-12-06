import React from "react";
import { Formik, Form } from "formik";
import "./PersonalData.css";
import { Input, InputSelect } from "./ElementsPages/index";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import fetchData from "../Redux/action";
import actionEdit from "../Redux/actionEdit";
import { useSelector } from "react-redux";

export default function PersonalDataF() {
  const dispatch = useDispatch();
  let history = useHistory();
  const isEdit = useSelector((state) => state.edit);
  const users = useSelector((state) => state.users);
  const editId = useSelector((state) => state.editId);

  const user = users.find((item) => item.id === editId);
  const newUsers = users.filter((item) => item.id !== user.id);

  const validationSchema = yup.object().shape({
    name: yup.string().required("Заполните это поле"),
    lastName: yup.string().required("Заполните это поле"),
    patronymic: yup.string().required("Заполните это поле"),
    birthday: yup.string().required("Заполните это поле"),
    adress: yup.string().required("Заполните это поле"),
    motherMaidenName: yup.string().required("Заполните это поле"),
    codeWord: yup.string().required("Заполните это поле"),
    friendEmail: yup.string().email().required("Заполните это поле"),
  });
  const genderSelect = [
    { value: { select: "Муж", titleSelect: "Муж" } },
    { value: { select: "Жен", titleSelect: "Жен" } },
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
    <>
      <div className="personal-data-form-container">
        <Formik
          validateOnChange={true}
          initialValues={
            isEdit
              ? {
                  id: user.id,
                  name: user.name,
                  lastName: user.lastName,
                  patronymic: user.patronymic,
                  birthday: user.birthday,
                  gender: user.gender,
                  country: user.country,
                  adress: user.adress,
                  motherMaidenName: user.motherMaidenName,
                  codeWord: user.codeWord,
                  aboutUs: user.aboutUs,
                  friendEmail: user.friendEmail,
                  telBoyfriend: user.telBoyfriend,
                  telGirlfriend: user.telGirlfriend,
                  pan: user.pan,
                  footbal: user.footbal,
                }
              : {
                  name: "",
                  lastName: "",
                  patronymic: "",
                  birthday: "",
                  gender: "Муж",
                  country: "Беларусь",
                  adress: "",
                  motherMaidenName: "",
                  codeWord: "",
                  aboutUs: "",
                  friendEmail: "",
                  telBoyfriend: "",
                  telGirlfriend: "",
                  footbal: "",
                  pan: "",
                }
          }
          validateOnBlur
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            if (isEdit) {
              dispatch(actionEdit([...newUsers, { ...user, ...data }]));
              history.push("card");
            } else {
              dispatch(fetchData(data));
              history.push("card");
            }
          }}
          validationSchema={validationSchema}
        >
          {({ values, isSubmitting }) => (
            <div className="personal-data-form">
              <Form className="data-form">
                <div className="data-form-title">
                  Все поля обязательны для заполнения
                </div>
                <Input
                  type="text"
                  name="name"
                  label="Имя:"
                  value={values.name}
                />
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
                  type="text"
                  name="birthday"
                  label="Дата рождения:"
                  value={values.birthday}
                  typeMask={"date"}
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

                {values.gender === "Муж" ? (
                  <>
                    <Input
                      type="text"
                      name="telGirlfriend"
                      label="Номер телефона своей девушки:"
                      value={values.telGirlfriend}
                      typeMask={"tel"}
                    />
                    <InputSelect
                      name="footbal"
                      label="За какую футбольную команду болеешь:"
                      value={values.footbal}
                      options={footbalSelect}
                    />
                  </>
                ) : (
                  <>
                    <Input
                      type="text"
                      name="telBoyfriend"
                      label="Номер телефона своего парня:"
                      value={values.telBoyfriend}
                      typeMask={"tel"}
                    />
                    <InputSelect
                      name="pan"
                      label="Какую сковороду предпочитаешь:"
                      value={values.pan}
                      options={panSelect}
                      telType={values.telBoyfriend}
                    />
                  </>
                )}
                <div className="form-footer">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="submit-btn"
                  >
                    <span className="text-submit-btn">Далее</span>
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}
