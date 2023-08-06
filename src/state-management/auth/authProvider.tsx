import React, { ReactNode, useReducer } from "react";
import { AuthContext } from "./authContext";

export interface LoginAction {
  type: "LOGIN";
  user: string;
}

export interface LogoutAction {
  type: "LOGOUT";
}

const LoginReducer = (state: string, action: LoginAction | LogoutAction) => {
  if (action.type === "LOGIN") return action.user;
  return "";
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, UserDispatch] = useReducer(LoginReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch: UserDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
