import React from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input/react-hook-form-input";

export default function PersonalData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => console.log("Отправлено:", data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          Имя
          <input {...register("firstName", { required: true })} />
          {errors.name && <i>Обязательное поле</i>}
        </p>
        <p>
          Фамилия:
          <input {...register("lastName", { required: true })} />
          {errors.name && <i>Обязательное поле</i>}
        </p>
        <p>
          Отчество:
          <input {...register("patronymic", { required: true })} />
          {errors.name && <i>Обязательное поле</i>}
        </p>
        <p>
          Дата рождения:
          <input type="date" {...register("birthday", { required: true })} />
        </p>
        <p>
          Пол:
          <input
            {...register("gender")}
            value="male"
            type="radio"
            name="gender"
            checked
          />
          <span>Муж</span>
          <input
            {...register("gender")}
            value="female"
            type="radio"
            name="gender"
          />
          <span>Жен</span>
        </p>
        <p>
          Страна проживания:
          <select {...register("country", { required: true })}>
            <option value="bel">Беларусь</option>
            <option value="rus">Россия</option>
            <option value="ukr">Украина</option>
          </select>
        </p>
        <p>
          Адрес, почтовый индекс:
          <input type="text" {...register("adress", { required: true })} />
        </p>
        <p>
          Девичья фамилия матери:
          <input type="text" {...register("mothersMadeName")} />
        </p>
        <p>
          Кодовое слово в вашем банке:
          <input type="text" {...register("bankPassWord")} />
        </p>
        <p>
          Как вы узнали о нашем сайте:
          <textarea id="story" name="story" rows="5" cols="30"></textarea>
        </p>
        <p>
          Email друга: <input type="text" {...register("friendEmail")} />
        </p>
        <p>
          Номер телефона своего парня:{" "}
          <PhoneInput
            name="phoneInput"
            control={control}
            rules={{ required: true }}
          />
        </p>
        <p>
          Какую сковороду предпочитаешь:{" "}
          <select {...register("selectionPan")}>
            <option value="Tefal">Tefal</option>
            <option value="Rondel">Rondel</option>
            <option value="Bollire">Bollire</option>
            <option value="JARKO">JARKO</option>
          </select>
        </p>
        <p></p>

        <input type="submit" />
      </form>
    </div>
  );
}
