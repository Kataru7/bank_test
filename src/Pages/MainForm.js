import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { CreditCardData, PersonalData } from ".";

export default function MainForm() {
  return (
    <>
      <div>
        <h2>Типовая форма</h2>
      </div>
      <div>
        <div>Личные данные</div>
        <PersonalData />
        <div>Данные кредитной кары</div>
        <div>Результат</div>
      </div>
    </>
  );
}
