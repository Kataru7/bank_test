import React from "react";
import { useSelector } from "react-redux";

function Result() {
  const user = useSelector((state) => state);
  const users = useSelector((state) => state.users);

  return (
    <div>
      <div>{user.name}</div>
      <div>{user.lastName}</div>
      <div>{user.patronymic}</div>
      <div>{user.birthday}</div>
      <div>{user.gender}</div>
      <div>{user.country}</div>
    </div>
  );
}

export default Result;
