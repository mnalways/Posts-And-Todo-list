import { useContext, useReducer, useState } from "react";
import LoginReducer from "../Reducers/LoginReducer";
import { AuthContext } from "./context/authContext";

// interface x {
//   dispatch: React.Dispatch<LoginAction | LogoutAction>;
// }

const LoginStatus = () => {
  const { user, dispatch } = useContext(AuthContext);
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", user: "Mayank Nigam" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
