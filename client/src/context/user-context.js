import React, { createContext, useEffect, useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";
export const UserContext = createContext(null);

var firebaseConfig = {
  apiKey: "AIzaSyBqM056tJsKC2YJwuL545pjRAZbTJJ-nLw",
  authDomain: "radigue.firebaseapp.com",
  projectId: "radigue",
  storageBucket: "radigue.appspot.com",
  messagingSenderId: "887570936065",
  appId: "1:887570936065:web:6aae92b086ce5f44ecab00",
  measurementId: "G-7RKEFEMFKW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const UserProvider = ({ children, signInWithGoogle, signOut, user }) => {
  const [appUser, setAppUser] = useState({});
  const [message, setMessage] = useState("");

  const handleSignOut = () => {
    signOut();
    setAppUser({});
  };

  useEffect(() => {
    if (user) {
      fetch(`/users`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          setAppUser(json.data);
          setMessage(json.message);
        });
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{ appUser, signInWithGoogle, handleSignOut, message }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(UserProvider);
