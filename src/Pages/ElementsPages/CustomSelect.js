import React, { useState } from "react";
import "./CustomSelect.css";

export default function CustomSelect(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(props.value);

  return (
    <div className="form-input-select">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <input
          className="selected-value"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={() => setValue("")}
        />
        <div className="arrow-wrapper" onClick={() => setValue("")}>
          <div className={`arrow  ${open ? "open" : null}`}></div>
        </div>
      </div>
      <div className={`options  ${open ? "open" : null}`}>
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
  );
}
