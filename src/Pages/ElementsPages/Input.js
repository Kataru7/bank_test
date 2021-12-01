import React from "react";
import { Field, useField } from "formik";

import InputMask from "react-input-mask";

export default function Input({
  label,
  nameClass,
  type,
  maxLength,
  component,
  typeMask,
  ...props
}) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  let createMask = (typeMask) => {
    switch (typeMask) {
      case "tel":
        return "+999 99 999 99 99";
      case "cardNumber":
        return "9999 9999 9999 9999";
      case "date":
        return "99/99/9999";
      case "monthYear":
        return "99/99";
      case "cvc":
        return "999";
      default:
        break;
    }
  };
  return (
    <div className={`form-input ${nameClass}`}>
      <label className="field-box__title">{label}</label>
      <div className="field-box__title_container">
        <InputMask
          mask={createMask(typeMask)}
          maskChar={""}
          component={component}
          className={
            meta.touched && meta.error
              ? "field-box__input  field-box__field field-box__input-error"
              : "field-box__input  field-box__field"
          }
          type={type}
          {...field}
          maxLength={maxLength}
          helpertext={errorText}
          error={!!errorText}
        />
        {meta.touched && meta.error && (
          <p className="field-box__error-text">{meta.error}</p>
        )}
      </div>
    </div>
  );
}
