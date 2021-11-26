import React from "react";
import { useSelector } from "react-redux";

function Result() {
  const user = useSelector((state) => state);
  const users = useSelector((state) => state.users);

  console.log(user);
  console.log(users);
  return <div></div>;
}

export default Result;
