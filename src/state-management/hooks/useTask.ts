import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const useTask = () => useContext(AuthContext);

export default useTask;
