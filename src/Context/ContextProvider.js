import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [Loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (name, img) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    });
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubsribe();
  }, [auth]);

  const authInfo = {
    user,
    Loading,
    setUser,
    createUser,
    logIn,
    logOut,
    setUser,
    signWithGoogle,
    updateUser,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
