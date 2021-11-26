import React from "react";
import { Field, useField } from "formik";

export default function Input({ label, type, maxLength, component, ...props }) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <div className="form-input">
      <label className="field-box__title">{label}</label>
      <Field
        component={component}
        className={
          meta.touched && meta.error
            ? "field-box__input field-box__field field-box__input-error"
            : "field-box__input field-box__field"
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
  );
}
