import React from "react";
import "./PersonalData.css";

export default function PersonalData() {
  return (
    <div className="personal-data-form">
      <form className="data-form">
        <div className="data-form-title">
          Все поля обязательны для заполнения
        </div>
        <div className="form-input">
          <label>Имя</label>
          <input className="input" type="text" />
        </div>
        <div className="form-input">
          <label>Фамилия:</label>
          <input className="input" />
        </div>
        <div className="form-input">
          <label>Отчество:</label>
          <input className="input" />
        </div>
        <div className="form-input">
          <label>Дата рождения:</label>
          <input className="input" type="date" />
        </div>
        <div className="form-input">
          <label>Пол:</label>
          <input value="male" type="radio" name="gender" checked />
          <span>Муж</span>
          <input value="female" type="radio" name="gender" />
          <span>Жен</span>
        </div>
        <div className="form-input">
          <label>Страна проживания:</label>
          <select className="input">
            <option value="bel">Беларусь</option>
            <option value="rus">Россия</option>
            <option value="ukr">Украина</option>
          </select>
        </div>
        <div className="form-input">
          <label>Адрес, почтовый индекс:</label>
          <input className="input" type="text" />
        </div>
        <div className="form-input">
          <label>Девичья фамилия матери:</label>
          <input className="input" type="text" />
        </div>
        <div className="form-input">
          <label>Кодовое слово в вашем банке:</label>
          <input className="input" type="text" />
        </div>
        <div className="form-input">
          <label>Как вы узнали о нашем сайте:</label>
          <textarea id="story" name="story" rows="5" cols="30"></textarea>
        </div>
        <div className="form-input">
          <label>Email друга:</label> <input type="text" />
        </div>
        <div className="form-input">
          <label>Номер телефона своего парня:</label>
          <input className="input" name="tel" />
        </div>
        <div className="form-input">
          <label>Какую сковороду предпочитаешь:</label>
          <select className="input">
            <option value="Tefal">Tefal</option>
            <option value="Rondel">Rondel</option>
            <option value="Bollire">Bollire</option>
            <option value="JARKO">JARKO</option>
          </select>
        </div>
        <div></div>

        <input type="submit" />
      </form>
    </div>
  );
}
