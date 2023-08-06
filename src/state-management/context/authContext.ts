import React from "react";
import { LoginAction, LogoutAction } from "../../Reducers/LoginReducer";

interface AuthContextType {
  user: string;
  dispatch: React.Dispatch<LoginAction | LogoutAction>;
}

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);
