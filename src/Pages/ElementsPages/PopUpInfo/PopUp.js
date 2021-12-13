import React from "react";
import "./PopUp.css";

export default function PopUp({ user }) {
  return (
    <div className="popup-container">
      <ul className="popup-list">
        <li className="popup-element">
          <div className="popup-label">Адрес, почтовый индекс:</div>
          <div className="popup-info">{user.adress}</div>
        </li>
        <li className="popup-element">
          <div className="popup-label">Девичья фамилия матери:</div>{" "}
          <div className="popup-info">{user.motherMaidenName}</div>
        </li>
        <li className="popup-element">
          <div className="popup-label">Кодовое слово в вашем банке:</div>{" "}
          <div className="popup-info">{user.codeWord}</div>
        </li>
        <li className="popup-element">
          <div className="popup-label">Как вы узнали о нашем банке:</div>{" "}
          <div className="popup-info">{user.aboutUs}</div>
        </li>
        <li className="popup-element">
          <div className="popup-label">Email друга:</div>{" "}
          <div className="popup-info">{user.friendEmail}</div>
        </li>
        <li className="popup-element">
          <div className="popup-label">Номер телефона:</div>
          <div className="popup-info">
            {(user.telBoyfriend, user.telGirlfriend)}
          </div>
        </li>
      </ul>
    </div>
  );
}
