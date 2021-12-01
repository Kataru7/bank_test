import React from "react";
import { useField } from "formik";

export default function Input({ label, options, telType, ...props }) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const option = options.map((el, key) => (
    <option key={key} value={el.value.select}>
      {el.value.titleSelect}
    </option>
  ));

  let checkedTelType = (telType) => {
    return telType.split(" ")[0] === "+375" ? false : true;
  };

  return (
    <div className="form-input">
      <label className="field-box__title">{label}</label>
      <select
        disabled={telType !== undefined ? checkedTelType(telType) : ""}
        className={
          meta.touched && meta.error
            ? "field-box__input select field-box__field field-box__input-error"
            : "field-box__input select field-box__field"
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
