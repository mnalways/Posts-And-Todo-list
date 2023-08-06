import React, { ReactNode, useReducer } from "react";
import { TaskContext } from "./TaskContext";
export interface Task {
  id: number;
  title: string;
}

export interface AddTaskAction {
  type: "ADD";
  task: Task;
}

export interface DeleteTaskAction {
  type: "DELETE";
  taskID: number;
}

const TaskReducer = (
  state: Task[],
  action: AddTaskAction | DeleteTaskAction
): Task[] => {
  if (action.type === "ADD") return [action.task, ...state];
  if (action.type === "DELETE")
    return state.filter((item) => item.id !== action.taskID);
  return state;
};

const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, taskDispatch: dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
