import React, { useState, useEffect } from "react";
import "./CustomSelect.css";
import { useField } from "formik";

export default function CustomSelect({ typeTel, ...props }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(props.value);
  const [typeSelect, setTypeSelect] = useState();
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  const changeValue = async () => {
    await props.setFieldValue(props.name, value);
  };

  let checkedTelType = (typeTel) => {
    return typeTel?.split(" ")[0] === "+375" ? false : true;
  };

  useEffect(() => {
    changeValue();
  }, [value]);

  useEffect(() => {
    if (props.name === "pan") {
      setTypeSelect(checkedTelType(typeTel));
    }
  }, [typeTel]);

  return (
    <div className="form-input">
      <label className="field-box__title">{props.label}</label>
      <div className="form-input-select">
        <div
          className="control"
          onClick={() => setOpen((prev) => (typeSelect ? prev : !prev))}
        >
          <input
            autoComplete="off"
            {...field}
            disabled={typeSelect}
            className={`selected-value             
            ${
              meta.touched && meta.error
                ? "field-box__input select field-box__field field-box__input-error"
                : "field-box__input select field-box__field"
            }`}
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onClick={() => setValue("")}
          />
          <div className="arrow-wrapper" onClick={() => setValue("")}>
            <div className={`arrow  ${open ? "open" : null}`}></div>
          </div>
        </div>
        <div
          className={`options  ${open ? "open" : null} ${
            props.name === "pan" ? "options-w-top-pan" : ""
          }
          ${props.name === "footbal" ? "options-w-top-footbal" : ""}`}
        >
          {props.options
            .filter(
              (element) =>
                element.toLowerCase().includes(value.toLowerCase()) === true
            )
            .map((el, i) => {
              return (
                <div
                  key={i}
                  className={`option ${value === el ? "selected" : null}`}
                  onClick={() => {
                    setValue(el);
                    setOpen(false);
                  }}
                >
                  {el}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
