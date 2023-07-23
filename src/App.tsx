import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";

function App() {
  return (
    <>
      {/* <TodoForm />
      <TodoList /> */}
      {/* <h1>Posts</h1>
      <PostList /> */}
      <TaskList />
    </>
  );
}

export default App;
