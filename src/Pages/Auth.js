import React, { useState } from "react";
import { auth } from "../Firebase/firebase-config";
import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import fetchSingIn from "../Redux/actionSingIn";
import { useHistory } from "react-router-dom";

export default function Auth() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const user = auth.currentUser;
  let history = useHistory();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      history.push("/registration");
    } else {
    }
  });

  const registerNewUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        dispatch(fetchSingIn(true));
      }
    );
  };

  const registerInGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      dispatch(fetchSingIn(true));
      // ...
    });
  };

  const singInEmail = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      dispatch(fetchSingIn(true));
      // ...
    });
  };

  const singOut = () => {
    signOut(auth).then(() => {
      dispatch(fetchSingIn(false));
    });
  };

  return (
    <div>
      <form>
        <div>
          <label></label>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label></label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <div>
            <button type="button" onClick={singInEmail}>
              Вход
            </button>
            <button type="button" onClick={singOut}>
              Выйти
            </button>
          </div>
          <div>
            <button type="button" onClick={registerNewUser}>
              Регистрация
            </button>
            <button type="button" onClick={registerInGoogle}>
              Регистрация через Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
