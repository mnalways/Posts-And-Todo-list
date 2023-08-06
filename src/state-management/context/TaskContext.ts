import React from "react";
import {
  AddTaskAction,
  DeleteTaskAction,
  Task,
} from "../../Reducers/taskReducer";

interface TaskContextType {
  tasks: Task[];
  taskDispatch: React.Dispatch<AddTaskAction | DeleteTaskAction>;
}

export const TaskContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);
