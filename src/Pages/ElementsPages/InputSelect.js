import React from "react";
import { useField } from "formik";

export default function Input({ label, options, ...props }) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const option = options.map((el, key) => (
    <option key={el.gender} value={el.value.gender}>
      {el.value.titleGender}
    </option>
  ));
  return (
    <div className="form-input">
      <label className="field-box__title">{label}</label>
      <select
        className={
          meta.touched && meta.error
            ? "field-box__input field-box__field field-box__input-error"
            : "field-box__input field-box__field"
        }
        {...field}
        helpertext={errorText}
        error={!!errorText}
      >
        {option}
      </select>
      {meta.touched && meta.error && (
        <p className="field-box__error-text">{meta.error}</p>
      )}
    </div>
  );
}
