import React, { ReactNode, useReducer } from "react";
import TaskReducer from "../Reducers/taskReducer";
import { TaskContext } from "./context/TaskContext";

const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, taskDispatch: dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
