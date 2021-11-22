import React from "react";
import { NavLink } from "react-router-dom";

export default function ButtonNext() {
  return (
    <div>
      <NavLink to={"/page4/registration"}>
        <button>Далее</button>
      </NavLink>
    </div>
  );
}
