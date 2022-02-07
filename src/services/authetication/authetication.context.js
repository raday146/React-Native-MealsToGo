import React, { useState, createContext } from "react";
import { loginRequest } from "./authetication.service";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [isAuth, setAuth] = useState(false);
  const onLogin = (email, password) => {
    setLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        isAuth(true);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        isAuth(false);
        setLoading(false);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{ user, isLoading, error, onLogin, isAuth }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
