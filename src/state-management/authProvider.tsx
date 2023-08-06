import React, { ReactNode, useReducer } from "react";
import { AuthContext } from "./context/authContext";
import LoginReducer from "../Reducers/LoginReducer";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, UserDispatch] = useReducer(LoginReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch: UserDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
