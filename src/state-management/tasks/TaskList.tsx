import { useContext, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import useAuthStore from "../auth/store";

const useTask = () => useContext(TaskContext);

const TaskList = () => {
  const { tasks, taskDispatch: dispatch } = useTask();
  const { user } = useAuthStore();
  return (
    <>
      <p>{user}</p>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskID: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
