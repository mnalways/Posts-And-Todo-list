import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import TaskReducer from "./Reducers/taskReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import { TaskContext } from "./state-management/context/TaskContext";
import LoginReducer from "./Reducers/LoginReducer";
import { AuthContext } from "./state-management/context/authContext";

function App() {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  const [user, UserDispatch] = useReducer(LoginReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: UserDispatch }}>
      <TaskContext.Provider value={{ tasks, taskDispatch: dispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
