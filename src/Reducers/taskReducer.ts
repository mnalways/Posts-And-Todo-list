export interface Task {
  id: number;
  title: string;
}

interface AddTaskAction {
  type: "ADD";
  task: Task;
}

interface DeleteTaskAction {
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

export default TaskReducer;
