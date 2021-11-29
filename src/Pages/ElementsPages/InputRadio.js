import React from "react";
import { Field, useField } from "formik";
import "./InputRadio.css";

export default function InputRadio({ title, ...props }) {
  const [field] = useField(props);
  return (
    <div className="radio">
      <label className="field-box__radio-label">
        <Field
          {...field}
          type="radio"
          className="field-box__radio-btn-hidden"
        />
        <span className="field-box__radio-btn-visible"> {title} </span>
      </label>
    </div>
  );
}
