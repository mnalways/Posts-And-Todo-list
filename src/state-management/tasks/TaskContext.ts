import React from "react";
import { Task, AddTaskAction, DeleteTaskAction } from "./taskProvider";

interface TaskContextType {
  tasks: Task[];
  taskDispatch: React.Dispatch<AddTaskAction | DeleteTaskAction>;
}

export const TaskContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);
