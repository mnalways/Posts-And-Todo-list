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

export default LoginReducer;
