import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Auth } from "./Pages/index";
import Routing from "./Routing";
import { useSelector } from "react-redux";

export default function App() {
  const userSingIn = useSelector((state) => state.singInUser);
  return (
    <>
      <BrowserRouter>{!userSingIn ? <Auth /> : <Routing />}</BrowserRouter>
    </>
  );
}
