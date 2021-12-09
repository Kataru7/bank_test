import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-element label">© 2016 Городской сайт</div>
      <div className="footer-link-container">
        <div className="footer-element">Пользовательское соглашение</div>
        <div className="footer-element">Инструкции</div>
        <div className="footer-element">Рекламодателям</div>
      </div>
      <div className="footer-element made">Сделано в Беларуси</div>
    </>
  );
}
