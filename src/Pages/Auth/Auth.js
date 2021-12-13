import React, { useState } from "react";
import { auth } from "../../Firebase/firebase-config";
import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import fetchSingIn from "../../Redux/actionSingIn";
import { useHistory } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  let history = useHistory();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      history.push("/registration");
    } else {
      history.push("/");
    }
  });

  const registerNewUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      dispatch(fetchSingIn(true));
    });
  };

  const registerInGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      dispatch(fetchSingIn(true));
    });
  };

  const singInEmail = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      dispatch(fetchSingIn(true));
    });
  };

  const singOut = () => {
    signOut(auth).then(() => {
      dispatch(fetchSingIn(false));
    });
  };

  return (
    <div className="auth-container">
      <form className="auth-form">
        <div className="auth-form-elem">
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="auth-form-elem">
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="auth-btn-container">
          <div className="btns-sing">
            <button
              type="button"
              className="submit-btn sing"
              onClick={singInEmail}
            >
              Вход
            </button>
            <button type="button" className="submit-btn sing" onClick={singOut}>
              Выйти
            </button>
          </div>
          <div>
            <button className="registration-link" onClick={registerNewUser}>
              Регистрация
            </button>
            <button type="button" onClick={registerInGoogle}>
              Регистрация Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
