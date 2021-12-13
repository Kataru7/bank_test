import React from "react";
import { Field, Formik, Form } from "formik";
import "./PersonalData.css";
import { Input } from "../../ElementsPages/index";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import fetchData from "../../../Redux/action";
import actionEdit from "../../../Redux/actionEdit";
import { useSelector } from "react-redux";
import CustomSelect from "../../ElementsPages/CustomInputs/CustomSelect";

export default function PersonalDataF() {
  const dispatch = useDispatch();
  let history = useHistory();
  const isEdit = useSelector((state) => state.edit);
  const users = useSelector((state) => state.users);
  const editId = useSelector((state) => state.editId);

  const user = users.find((item) => item.id === editId);
  const newUsers = users.filter((item) => item.id !== user.id);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Заполните это поле")
      .matches(/^[a-zA-Z ]+$/, "Допустимы только буквы"),
    lastName: yup.string().required("Заполните это поле"),
    patronymic: yup.string().required("Заполните это поле"),
    birthday: yup
      .date()
      .required("Заполните это поле")
      .max(new Date(2004, 1, 1), "Вы слишком молоды")
      .min(new Date(1921, 1, 1), "Дата недопустима"),
    adress: yup.string().required("Заполните это поле"),
    motherMaidenName: yup.string().required("Заполните это поле"),
    codeWord: yup.string().required("Заполните это поле"),
    friendEmail: yup.string().email().required("Заполните это поле"),
  });
  const genderSelect = ["Муж", "Жен"];
  const countrySelect = ["Беларусь", "Россия", "Украина", "Другая..."];
  const footbalSelect = [
    "Барселона",
    "Реал-Мадрид",
    "Марсель",
    "Манчестер",
    "Ювентус",
    "Ливерпуль",
  ];
  const panSelect = ["Tefal", "Rondel", "Alesia"];

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
          {({ values, isSubmitting, setFieldValue }) => (
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
                  type="date"
                  name="birthday"
                  label="Дата рождения:"
                  value={values.birthday}
                  typeMask={"date"}
                  width="date"
                />
                <Field
                  setFieldValue={setFieldValue}
                  as={CustomSelect}
                  name="gender"
                  label="Пол:"
                  value={values.gender}
                  options={genderSelect}
                />
                <Field
                  setFieldValue={setFieldValue}
                  as={CustomSelect}
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
                  helperText={"Узнать индекс"}
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
                  helperText={"Из газеты, телевидения,радио или проч."}
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
                    <Field
                      setFieldValue={setFieldValue}
                      as={CustomSelect}
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
                      autoComplete={"off"}
                    />
                    <Field
                      setFieldValue={setFieldValue}
                      as={CustomSelect}
                      name="pan"
                      label="Какую сковороду предпочитаешь:"
                      value={values.pan}
                      options={panSelect}
                      typeTel={values.telBoyfriend}
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
