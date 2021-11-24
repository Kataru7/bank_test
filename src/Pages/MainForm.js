import React from "react";
import "./MainForm.css";

export default function MainForm() {
  return (
    <div className="form-container">
      <div className="form-header-conteiner">
        <h2 className="form-header">Типовая форма</h2>
      </div>
      <div className="form-steps">
        <div>Личные данные</div>
        <div>Данные кредитной кары</div>
        <div>Результат</div>
      </div>
    </div>
  );
}
